<template>
  <Table :data='data'>
    <el-table-column prop='Root-App' label='Root-App' min-width='140' />
    <el-table-column prop='Sub-App' label='Sub-App' />
    <el-table-column prop='Sub-Owner' label='Sub-Owner' />
    <el-table-column prop='Dependency Desc' label='Dependency Desc' />
    <el-table-column prop='Target Due Date' label='Sub-TargetDate'>
      <template #default='{row}'>
        {{ row['Target Due Date'] && getDate(row['Target Due Date'], false) }}
      </template>
    </el-table-column>
    <el-table-column prop='Time Risk' label='Time Risk' />
    <el-table-column label='操作' width='140'>
      <el-button link type='primary'>修改</el-button>
      <el-button type='danger' link>删除</el-button>
    </el-table-column>
  </Table>
</template>

<script setup lang='ts'>
import { getDate } from '@/util/date'
import Table from '@/components/Table.vue'
import { useDataStore } from '@/stores/data.store';
import { computed } from 'vue';

const props = defineProps({
  activeTab: {
    type: String,
    default: ''
  }
})
const dataStore = useDataStore()
const data = computed(() => dataStore.data[props.activeTab])
</script>

<style scoped>

</style>