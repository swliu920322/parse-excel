import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { fetchData } from '@/util/request'

function dealChildrenRelation(data) {
  const { rootApp, integrated } = data
  rootApp.forEach((i, index: number) => {
    const { 'Independent App': parName } = i
    const order = index + 1
    // 更新的时候，更新父类，同时修改子类中的rootTime, 修改rootApp的数据
    // 更新子类，直接更新子类的事件就行, 修改integrated的数据
    i.children = integrated.filter(ii => ii['Root-App'] === parName).map((ii, idx: number) => {
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

  return {
    data: dataRef,
    initData
  }
})
