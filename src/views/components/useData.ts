import { onMounted, ref, computed } from 'vue'
import { useDataStore } from '@/stores/data.store'

export const useData = () => {
  const dataStore = useDataStore()
  const activeTabRef = ref('')
  const tabListRef = ref<string[]>([])

  onMounted(async () => {
    tabListRef.value = Object.keys(dataStore.data).map((i) => i)
    activeTabRef.value = tabListRef.value[0]
  })
  return {
    activeTabRef,
    tabListRef
  }
}
