import { getDate } from '@/util/date'
import { reactive, ref, computed } from 'vue'
import { useDataStore } from '@/stores/data.store'

function getChangeContext(
  checkKeys = [],
  newObj: Record<string, any>,
  oldObj: Record<string, any>
) {
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

export const useSearch = (props: any) => {
  const dataStore = useDataStore()
  // 根据生效的条件进行过滤
  let innerSearchRef = ref({})
  const searchModel = reactive<Record<string, any>>({ toConfirm: false })

  const dataRef = computed(() => {
    const changedKeys = Object.keys(innerSearchRef.value)
    return dataStore.data[props.activeTab].filter((i: Record<string, any>) => {
        return changedKeys.reduce((r, key) => {
          const val = innerSearchRef.value[key]
          return r && i[key]?.indexOf(val) >= 0
        }, true)
      }
    )
  })
  const formRef = ref()


  function reset() {
    formRef.value.resetFields()
    innerSearchRef.value = {}
    // searchModel.
  }

  function toSearch() {
    innerSearchRef.value = { ...searchModel }
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
    visibleRef.value = true
    scopeRef = row
    itemInfoRef.value = { ...row }
  }

  function cancel() {
    visibleRef.value = false
  }

  const dataStore = useDataStore();
  function confirm() {
    const checkKeys = [
      { key: 'Target Due Date', type: 'date' },
      { key: 'Status', type: 'string' }
    ]
    const { changedVal, changeHistory } = getChangeContext(checkKeys, itemInfoRef.value, scopeRef)
    if (Object.keys(changedVal).length) {
      changedVal.toConfirm = '是'
      Object.assign(scopeRef, changedVal)
      if (!scopeRef.history) {
        scopeRef.history = ''
      }
      const prefix = scopeRef.history ? '\n' : ''
      scopeRef.history += `${prefix}${getDate()} 修改了 ${changeHistory.join('、')}`

      let changeContext: any = {
        object: {
          ...changedVal,
          history: scopeRef.history,
          toConfirm: scopeRef.toConfirm
        }
      }
      if (scopeRef.selfOrder) {
        changeContext = {
          ...changeContext,
          sheetName: 'integrated',
          rowNumber: scopeRef.selfOrder
        }
      } else {
        changeContext = {
          ...changeContext,
          sheetName: 'rootApp',
          rowNumber: itemInfoRef.value.index
        }
      }
      dataStore.changeData(changeContext)
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
