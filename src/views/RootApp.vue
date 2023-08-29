<template>

  <Table :data='rootApp'>

    <el-table-column prop='name' label='Independent App' min-width='140' />
    <el-table-column prop='' label='PRU' />
    <el-table-column prop='category' label='Category' />
    <el-table-column prop='viewer.displayName' label='IT-Viewer' />
    <el-table-column prop='po.displayName' label='APP-Owner' />
    <el-table-column prop='state' label='Status' />
    <el-table-column prop='' label='Target Due Date' />
    <el-table-column prop='' label='Risk Description' />
  </Table>
</template>

<script setup lang='ts'>
import { rootApp } from '@/util'
import { onMounted } from 'vue'
import Table from '@/components/Table.vue'

onMounted(() => {
  console.log(rootApp)
})
</script>

<style scoped>

</style>