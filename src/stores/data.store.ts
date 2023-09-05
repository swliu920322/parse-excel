import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { fetchData } from '@/util/request'

function dealChildrenRelation(data) {
  const { rootApp, integrated } = data
  console.log('data', data)
  rootApp.forEach(i => {
    const { 'Independent App': parName, 'Target Due Date': rootDate } = i
    let isDelay = false
    i.children = integrated.filter(ii => ii['Root-App'] === parName).map(i => {
      const innerDelay = new Date(i['Target Due Date']) > new Date(rootDate)
      isDelay = isDelay || innerDelay
      return {
        ...i,
        'Independent App': i['Sub-App'],
        isDelay: innerDelay
      }
    })
    i.isDelay = isDelay
  })
}

export const useDataStore = defineStore('data', () => {
  const dataRef = ref<Record<string, any[]>>({})

  async function initData() {
    const { data } = await fetchData()
    dealChildrenRelation(data)
    dataRef.value = data
  }

  return {
    data: dataRef,
    initData
  }
})
