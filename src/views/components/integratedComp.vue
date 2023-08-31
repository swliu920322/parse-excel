<template>
  <Table :data='data'>
    <el-table-column prop='Root-App' label='Root-App' min-width='140' />
    <el-table-column prop='Sub-App' label='Sub-App' />
    <el-table-column prop='Sub-Owner' label='Sub-Owner' />
    <el-table-column prop='Dependency Desc' label='Dependency Desc' />
    <el-table-column prop='Sub-TargetDate' label='Sub-TargetDate' />
    <el-table-column prop='Root-TargetDate' label='Root-TargetDate' />
    <el-table-column prop='Time Risk' label='Time Risk' />
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