<template>
  <div class='h-full flex flex-col'>
    <el-tabs v-if='tabListRef.length' v-model='activeTabRef' class='demo-tabs'>
      <el-tab-pane v-for='i of tabListRef' :key='i' :label='i' :name='i' />
    </el-tabs>
    <div class='flex-1 flex flex-col overflow-hidden'>

      <RootAppComp :name='tabListRef[0]' :data='curDataRef' v-if='activeTabRef === tabListRef[0]' />
      <IndependentAppComp :name='tabListRef[1]' :data='curDataRef' v-else-if='activeTabRef === tabListRef[1]' />
      <IntegratedComp :name='tabListRef[2]' :data='curDataRef' v-else />

    </div>
  </div>
</template>

<script setup lang='ts'>
import { onMounted, ref, computed } from 'vue'
import { fetchData } from '@/util/request'
import RootAppComp from '@/views/components/RootAppComp.vue'
import IntegratedComp from '@/views/components/integratedComp.vue'
import IndependentAppComp from '@/views/components/independentAppComp.vue'

const activeTabRef = ref('')
const tabListRef = ref([])
const dataSourceRef = ref({})
onMounted(async () => {
  const { data } = await fetchData()
  dataSourceRef.value = data
  tabListRef.value = Object.keys(data).map(i => i)
  activeTabRef.value = tabListRef.value[0]
})
const curDataRef = computed(() => {
  return dataSourceRef.value[activeTabRef.value]
})
</script>

<style scoped>

</style>