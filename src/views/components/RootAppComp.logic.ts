import { getDate } from '@/util/date'
import { changeObj } from '@/util/request'
import { reactive, ref } from 'vue'

function getChangeContext(
  checkKeys = [],
  newObj: Record<string, any>,
  oldObj: Record<string, any>
) {
  console.log({ newObj, oldObj })
  const changeHistory: any[] = []
  const changedVal = checkKeys.reduce((r, item) => {
    const { key, type } = item
    const oldVal = oldObj[key]
    let newVal = newObj[key]
    if (type === 'date') {
      newVal ? (newVal = getDate(newVal, false)) : ''
    }
    if (oldVal !== newVal) {
      changeHistory.push(`${key}: ${oldVal || '空值'} => ${newVal || '空值'}`)
      return { ...r, [key]: newVal }
    }
    return r
  }, {})
  return {
    changeHistory,
    changedVal
  }
}

// 找到变化的key和value

export const useSearch = (data: any) => {
  const dataRef = ref(data)
  const formRef = ref()
  const searchModel = reactive<Record<string, any>>({})

  function reset() {
    formRef.value.resetFields()
    dataRef.value = data
  }

  function toSearch() {
    const changedKeys = Object.keys(searchModel)
    dataRef.value = data.filter((i: Record<string, any>) =>
      changedKeys.reduce((r, key) => r && i[key].includes(searchModel[key]), true)
    )
  }

  return {
    dataRef,
    formRef,
    searchModel,
    reset,
    toSearch
  }
}

export const useRootForm = () => {
  const visibleRef = ref<boolean>(false)
  const tableRef = ref()
  // 临时存储，旧数据
  let scopeRef = {}
  const itemInfoRef = ref({})

  function openEdit(row: any) {
    console.log(row)

    visibleRef.value = true
    scopeRef = row
    itemInfoRef.value = { ...row }
  }

  function cancel() {
    visibleRef.value = false
  }

  function confirm() {
    const checkKeys = [
      { key: 'Target Due Date', type: 'date' },
      { key: 'Status', type: 'string' }
    ]
    const { changedVal, changeHistory } = getChangeContext(checkKeys, itemInfoRef.value, scopeRef)
    if (Object.keys(changedVal).length) {
      changedVal.toConfirm = true
      Object.assign(scopeRef, changedVal)
      if (!scopeRef.history) {
        scopeRef.history = ''
      }
      const prefix = scopeRef.history ? '\n' : ''
      scopeRef.history += `${prefix}${getDate()} 修改了 ${changeHistory.join('、')}`

      changeObj({
        sheetName: 'rootApp',
        rowNumber: itemInfoRef.value.index,
        object: {
          ...changedVal,
          history: scopeRef.history,
          toConfirm: scopeRef.toConfirm
        }
      })
    }
    visibleRef.value = false
  }

  return {
    confirm,
    cancel,
    openEdit,
    visibleRef,
    itemInfoRef,
    tableRef
  }
}
