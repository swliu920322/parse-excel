<template>

  <Table :data='dataRef'>
    <template #header>
      <div>
        <el-form ref='formRef' inline :model='searchModel'>
          <el-form-item prop='Independent App' label='Independent App'>
            <el-input style='width: 180px' clearable v-model='searchModel["Independent App"]' placeholder='请输入查询内容' />
          </el-form-item>
          <el-form-item prop='Status' label='Status'>
            <el-input style='width: 180px' clearable v-model='searchModel["Status"]' placeholder='请输入状态' />
          </el-form-item>
          <el-form-item>
            <el-button @click='reset'>重置</el-button>
            <el-button type='primary' @click='toSearch'>查询</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div>
        <el-button type='primary'>新增</el-button>
      </div>
    </template>
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
import { useSearch } from '@/views/components/RootAppComp.logic'
import { useDataStore } from '../../stores/data.store';
import { computed } from 'vue';

const props = defineProps({
  activeTab: {
    type: String,
    default: ''
  }
})
const dataStore = useDataStore()
const dataComputed = computed(() => dataStore.data[props.activeTab])
const { dataRef, formRef, searchModel, reset, toSearch } = useSearch(dataComputed)
</script>

<style scoped>

</style>