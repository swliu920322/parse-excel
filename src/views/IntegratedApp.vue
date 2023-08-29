<template>
  <Table :data='integrated'>

    <el-table-column prop='par.name' label='Root-App' min-width='140' />
    <el-table-column prop='name' label='Sub-App' />
    <el-table-column prop='po.displayName' label='Sub-Owner' />
    <el-table-column prop='category' label='Dependency Desc' />
    <el-table-column prop='' label='Sub-TargetDate' />
    <el-table-column prop='' label='Root-TargetDate' />
    <el-table-column prop='' label='Time Risk' />
  </Table>
</template>

<script setup lang='ts'>
import { integrated } from '@/util'
import { onMounted } from 'vue'
import Table from '@/components/Table.vue'

onMounted(() => {
  console.log(integrated)
})
</script>

<style scoped>

</style>