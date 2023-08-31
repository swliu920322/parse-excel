import { getDate } from '@/util/date'
import { changeObj } from '@/util/request'
import { reactive, ref } from 'vue'

function getChangeContext(checkKeys = [], newObj, oldObj) {
  console.log({ newObj, oldObj })
  let changeHistory = []
  const changedVal = checkKeys.reduce((r, item) => {
    const { key, type } = item
    const oldVal = oldObj[key]
    let newVal = newObj[key]
    if (type === 'date' && newVal) {
      newVal = getDate(newVal, false)
    }
    if (oldVal !== newVal) {
      changeHistory.push(`${key}: ${oldVal} => ${newVal}`)
      return {
        ...r,
        [key]: newVal
      }
    }
    return r
  }, {})
  return {
    changeHistory,
    changedVal
  }
}

// 找到变化的key和value

export const useSearch = (data) => {
  const dataRef = ref(data)
  const formRef = ref()
  const searchModel = reactive({
    ['Independent App']: '',
    Status: ''
  })

  function reset() {
    formRef.value.resetFields()
    dataRef.value = data
  }

  function toSearch() {
    const keys = Object.keys(searchModel)
    dataRef.value = data.filter(i => {
      return keys.reduce((r, key) => {
        return r && i[key].includes(searchModel[key])
      }, true)
    })
  }

  return {
    dataRef,
    formRef,
    searchModel,
    reset,
    toSearch
  }
}

export const useRootAppComp = () => {

}

export const useRootForm = () => {

  const visibleRef = ref<boolean>(false)

  let scopeRef = {}
  const itemInfoRef = ref({})

  function openEdit(row, index) {
    visibleRef.value = true
    scopeRef = row
    itemInfoRef.value = { ...row, index }
  }

  function cancel() {
    visibleRef.value = false
  }

  function confirm() {
    const checkKeys = [
      {
        key: 'Target Due Date', type: 'date'
      }, {
        key: 'Status', type: 'string'
      }
    ]
    const { changedVal, changeHistory } = getChangeContext(checkKeys, scopeRef, itemInfoRef.value)
    if (Object.keys(changedVal).length) {
      changedVal.confirmed = true
      Object.assign(scopeRef, changedVal)
      if (!scopeRef.history) {
        scopeRef.history = ''
      }
      const prefix = scopeRef.history ? '\n' : ''
      scopeRef.history += `${prefix}${getDate()} 修改了 ${changeHistory.join('、')}`
      changeObj({
        sheetName: 'rootApp',
        rowNumber: itemInfoRef.value.index + 2,
        object: {
          ...changedVal,
          history: scopeRef.history,
          confirmed: scopeRef.confirmed
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
    itemInfoRef
  }
}