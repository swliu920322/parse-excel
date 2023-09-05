<template>
  <Table ref='tableRef' row-key='Independent App' :data='dataRef'>
    <template #header>
      <div>
        <el-form ref='formRef' inline :model='searchModel'>
          <el-form-item prop='Independent App' label='Independent App'>
            <el-input
              style='width: 180px'
              clearable
              v-model="searchModel['Independent App']"
              placeholder='请输入查询内容'
            />
          </el-form-item>
          <el-form-item prop='Status' label='Status'>
            <el-input
              style='width: 180px'
              clearable
              v-model="searchModel['Status']"
              placeholder='请输入状态'
            />
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
    <el-table-column prop='Category' label='Category' width='105' />
    <el-table-column prop='IT-Viewer' label='IT-Viewer' />
    <el-table-column prop='APP-Owner' label='APP-Owner' />
    <el-table-column prop='Status' label='Status' width='75' />
    <el-table-column prop='Target Due Date' label='Target Due Date'>
      <template #default='{ row }'>
        <span :style='{ color: getColor(row) }'>
          {{ row['Target Due Date'] && getDate(row['Target Due Date'], false) }}
        </span>
      </template>
    </el-table-column>
    <el-table-column prop='Risk Description' label='Risk Description' />
    <el-table-column prop='confirmed' label='confirmed' width='88' />
    <el-table-column label='操作' width='180'>
      <template #default='scope'>
        <el-button link type='primary' @click='openEdit(scope.row, scope.$index)'>修改</el-button>
        <el-button link type='success' @click='openRecord(scope.row)'>修改记录</el-button>
        <el-button type='danger' link>删除</el-button>
      </template>
    </el-table-column>
  </Table>
  <el-dialog v-model='visibleRef' center title='修改' width='600'>
    <h3 class='w-full text-[26px] text-center mb-4'>{{ itemInfoRef['Independent App'] }}</h3>
    <el-form :model='itemInfoRef' labelWidth='160'>
      <el-form-item prop='Status' label='Status'>
        <el-input
          class='w-full'
          clearable
          v-model="itemInfoRef['Status']"
          placeholder='请输入状态'
        />
      </el-form-item>
      <el-form-item label='Target Due Date' prop='Target Due Date' class='w-full'>
        <el-date-picker
          style='width: 100%'
          v-model="itemInfoRef['Target Due Date']"
          placeholder='请选择日期'
        />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class='dialog-footer'>
        <el-button @click='cancel'>Cancel</el-button>
        <el-button type='primary' @click='confirm'> Confirm </el-button>
      </span>
    </template>
  </el-dialog>
  <el-dialog v-model='recordVisibleRef' title='变更记录' center>
    <el-table :data='recordDataRef'>
      <el-table-column type='index' label='#' width='50' />
      <el-table-column label='记录' prop='record' />
    </el-table>
  </el-dialog>
</template>

<script setup lang='ts'>
import Table from '@/components/Table.vue'
import { ref, computed } from 'vue'
import { getDate, firstDateIsEarly } from '@/util/date'
import { useRootForm, useSearch } from '@/views/components/RootAppComp.logic'
import { useDataStore } from '../../stores/data.store'

const props = defineProps({
  activeTab: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  }
})

const dataStore = useDataStore()
const { openEdit, confirm, tableRef, cancel, visibleRef, itemInfoRef } = useRootForm()
const dataComputed = computed(() => dataStore.data[props.activeTab])
const { dataRef, formRef, searchModel, reset, toSearch } = useSearch(dataComputed)

const recordVisibleRef = ref(false)
const recordDataRef = ref([])

function openRecord(row: any) {
  recordDataRef.value = row.history?.split('\n').map((i: any) => ({ record: i }))
  recordVisibleRef.value = true
}

function getColor(row) {
  if (row.children) {
    return firstDateIsEarly(row, row.children, 'Target Due Date') ? 'red' : 'black'
  }
  return firstDateIsEarly(row.par, row, 'Target Due Date') ? 'red' : 'black'
}
</script>

<style scoped></style>
