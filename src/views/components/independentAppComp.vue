<template>

  <Table :data='data'>
    <el-table-column prop='Independent App' label='Independent App' min-width='140' />
    <el-table-column prop='PRU' label='PRU' />
    <el-table-column prop='Category' label='Category' />
    <el-table-column prop='IT-Viewer' label='IT-Viewer' />
    <el-table-column prop='APP-Owner' label='APP-Owner' />
    <el-table-column prop='Status' label='Status' />
    <el-table-column prop='Target Due Date' label='Target Due Date' />
    <el-table-column prop='Risk Description' label='Risk Description' />

    <el-table-column label='操作' width='140'>
      <el-button link type='primary'>修改</el-button>
      <el-button type='danger' link>删除</el-button>
    </el-table-column>
  </Table>

</template>

<script setup lang='ts'>

import Table from '@/components/Table.vue'

const props = defineProps({
  data: {
    type: Array,
    default: () => []
  }
})
</script>

<style scoped>

</style>