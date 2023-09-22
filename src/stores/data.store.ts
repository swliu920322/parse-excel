import { ref } from 'vue'
import { defineStore } from 'pinia'
import { changeObj, fetchData } from '@/util/request'

function dealChildrenRelation(data: any) {
  const { rootApp, integrated } = data
  integrated.forEach((i: any, idx: number) => i.selfOrder = idx + 1)
  rootApp.forEach((i: any, index: number) => {
    const { 'Independent App': parName } = i
    const order = index + 1
    // 更新的时候，更新父类，同时修改子类中的rootTime, 修改rootApp的数据
    // 更新子类，直接更新子类的事件就行, 修改integrated的数据
    i.children = integrated.filter((ii: any) => ii['Root-App'] === parName).map((ii:any, idx: number) => {
      const orderInner = idx + 1
      return {
        ...ii,
        'Independent App': ii['Sub-App'],
        par: i,
        index: [order, orderInner].join('-'),
        curIndex: orderInner,
        toConfirm: ii.toConfirm || '否'
      }
    })
    i.index = order
    i.toConfirm = i.toConfirm || '否'
  })
}

export const useDataStore = defineStore('data', () => {
  const dataRef = ref<Record<string, any[]>>({})

  async function initData() {
    const { data } = await fetchData()
    dealChildrenRelation(data)
    dataRef.value = data
  }

  function changeData(data: any) {
    const { sheetName, rowNumber, object } = data
    dataRef.value[sheetName][rowNumber -1] = {
      ...dataRef.value[sheetName][rowNumber -1],
      ...object
    }
    dealChildrenRelation(dataRef.value)
    changeObj(data)
  }

  return {
    data: dataRef,
    initData,
    changeData
  }
})
