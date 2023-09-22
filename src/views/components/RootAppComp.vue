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
          <el-form-item prop='toConfirm' label='待确认'>
            <el-checkbox true-label='是' false-label='否' v-model='searchModel.toConfirm' />
          </el-form-item>
          <el-form-item>
            <el-button @click='reset'>重置</el-button>
            <el-button type='primary' @click='toSearch'>查询</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div>
        <el-button type='primary'>新增</el-button>
        <el-button type='success' @click='openChart'>图表</el-button>
      </div>
    </template>
    <el-table-column prop='index' width='90' label='#' />
    <el-table-column prop='Independent App' label='Independent App' min-width='140' />
    <el-table-column prop='PRU' label='PRU' />
    <el-table-column prop='Category' label='Category' width='105' />
    <el-table-column prop='IT-Viewer' label='IT-Viewer' />
    <el-table-column prop='APP-Owner' label='APP-Owner' />
    <el-table-column prop='Status' label='Status' width='75' />
    <el-table-column prop='Target Due Date' width='100' label='Target Due Date'>
      <template #default='{ row }'>
        <span :style='{ color: getColor(row) }'>
          {{ row['Target Due Date'] && getDate(row['Target Due Date'], false) }}
        </span>
      </template>
    </el-table-column>
    <el-table-column prop='Risk Description' label='Risk Description' />
    <el-table-column prop='toConfirm' label='待确认' width='88'>
      <template #default='{ row }'>
        <span :style='{ color: row.toConfirm === "是"? "red" : "green" }'>
          {{ row['toConfirm'] }}
        </span>
      </template>
    </el-table-column>
    <el-table-column label='操作' width='180'>
      <template #default='scope'>
        <el-button link type='primary' @click='openEdit(scope.row)'>修改</el-button>
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
      <el-form-item label='Risk Description' prop='Risk Description' class='w-full'>
        <el-input
          type='textarea'
          style='width: 100%'
          v-model="itemInfoRef['Risk Description']"
          placeholder='请输入风险描述'
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
    <el-table :data='recordDataRef' height='300'>
      <el-table-column type='index' label='#' width='50' />
      <el-table-column label='记录' prop='record' />
    </el-table>
    <template #footer v-if='itemInfoRef.toConfirm === "是"'>
      <span class='dialog-footer'>
        <el-button type='primary' @click='confirmUpdate'>确认变更</el-button>
      </span>
    </template>
  </el-dialog>
  <el-dialog v-model='chartState' title='图表' center>
    <div class='flex'>
      <div ref='chartRef' style='width: 300px; height: 300px' />
      <div ref='chartRef2' style='width: 400px; height: 300px' />
    </div>
  </el-dialog>
</template>

<script setup lang='ts'>
import Table from '@/components/Table.vue'
import { getDate, firstDateIsEarly } from '@/util/date'
import { useOpenChart, useRootForm, useSearch } from '@/views/components/RootAppComp.logic'

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


const {
  openEdit, confirm, confirmUpdate, tableRef, cancel, visibleRef, itemInfoRef, recordVisibleRef,
  recordDataRef,
  openRecord
} = useRootForm()

const { dataRef, formRef, searchModel, reset, toSearch } = useSearch(props)

const { chartState, chartRef, chartRef2, openChart, closeChart } = useOpenChart(props)


function getColor(row) {
  let judge = row.children ? [row, row.children] : [row.par, row]
  return firstDateIsEarly(...judge, 'Target Due Date') ? 'red' : 'black'
}
</script>

<style scoped></style>
