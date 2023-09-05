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
import RootAppComp from '@/views/components/RootAppComp.vue'
import IntegratedComp from '@/views/components/integratedComp.vue'
import IndependentAppComp from '@/views/components/independentAppComp.vue'
import { useData } from '@/views/components/useData'

const { curDataRef, activeTabRef, tabListRef } = useData()
</script>

<style scoped>

</style>