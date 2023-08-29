<template>
  <el-table :data='independentApp'>
    <el-table-column type='index' width='50' />
    <el-table-column prop='name' label='Independent App' />
    <el-table-column prop='' label='PRU' />
    <el-table-column prop='category' label='Category' />
    <el-table-column prop='viewer.displayName' label='IT-Viewer' />
    <el-table-column prop='po.displayName' label='APP-Owner' />
    <el-table-column prop='state' label='Status' />
    <el-table-column prop='' label='Target Due Date' />
    <el-table-column prop='' label='Risk Description' />
  </el-table>
</template>

<script setup lang='ts'>
import { independentApp } from '@/util/index'
import { onMounted } from 'vue'

onMounted(() => {
  console.log(independentApp)
})
</script>

<style scoped>

</style>