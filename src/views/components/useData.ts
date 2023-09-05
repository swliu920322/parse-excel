import { onMounted, ref, computed } from 'vue'
import { fetchData } from '@/util/request'
// import * as allData from '@/util'

function dealChildrenRelation(data) {
  const { rootApp, integrated, independentApp } = data
  console.log('data', data)
  rootApp.forEach(i => {
    const { 'Independent App': parName } = i;
    i.children = integrated.filter(ii => ii['Root-App'] === parName).map(i => {
      return {
        ...i,
        'Independent App': i['Sub-App']
      }
    })
  })
}

export const useData = () => {
  const activeTabRef = ref('')
  const tabListRef = ref([])
  const dataSourceRef = ref({})
  onMounted(async () => {
    const { data } = await fetchData()
    dealChildrenRelation(data)
    dataSourceRef.value = data
    tabListRef.value = Object.keys(data).map(i => i)
    activeTabRef.value = tabListRef.value[0]
  })
  const curDataRef = computed(() => dataSourceRef.value[activeTabRef.value])
  return {
    curDataRef, activeTabRef, tabListRef
  }
}