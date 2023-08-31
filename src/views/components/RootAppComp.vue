<template>
  <Table :data='data'>
    <el-table-column prop='Independent App' label='Independent App' min-width='140' />
    <el-table-column prop='PRU' label='PRU' />
    <el-table-column prop='Category' label='Category' width='105' />
    <el-table-column prop='IT-Viewer' label='IT-Viewer' />
    <el-table-column prop='APP-Owner' label='APP-Owner' />
    <el-table-column prop='Status' label='Status' width='75' />
    <el-table-column prop='Target Due Date' label='Target Due Date'>
      <template #default='{row}'>
        <span>{{ row['Target Due Date'] && getDate(row['Target Due Date'], false) }}</span>
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
    <el-form :model='itemInfoRef'>
      <el-form-item label='Target Due Date' prop='Target Due Date' class='w-full'>
        <el-date-picker style='width: 100%' v-model='itemInfoRef["Target Due Date"]' />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class='dialog-footer'>
        <el-button @click='cancel'>Cancel</el-button>
        <el-button type='primary' @click='confirm'>
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
  <el-dialog v-model='recordVisibleRef' center>
    <el-table :data='recordDataRef'>
      <el-table-column label='变更记录' prop='record' />
    </el-table>
  </el-dialog>
</template>

<script setup lang='ts'>
import Table from '@/components/Table.vue'
import { ref } from 'vue'
import { getDate } from '@/util/date'
import { changeData, changeObj } from '@/util/request'
import { parseDate } from 'element-plus'

const props = defineProps({
  data: {
    type: Array,
    default: () => []
  },
  name: {
    type: String,
    default: ''
  }
})
const visibleRef = ref<boolean>(false)

let scopeRef = {}
const itemInfoRef = ref({})

function openEdit(row, index) {
  visibleRef.value = true
  scopeRef = row
  itemInfoRef.value = { ...row, index }
}

function cancel() {
  visibleRef.value = false
}

function confirm() {
  const val = itemInfoRef.value['Target Due Date']
  const beforeVal = scopeRef['Target Due Date']
  if (val) {
    if (getDate(val, false) !== beforeVal) {
      scopeRef['Target Due Date'] = getDate(val, false)
      scopeRef.confirmed = true
      if (!scopeRef.history) {
        scopeRef.history = ''
      } else {
        scopeRef.history += '\n'
      }
      scopeRef.history += `${getDate()} 修改了Target Due Date, ${beforeVal ? getDate(beforeVal, false) : '空值'} => ${scopeRef['Target Due Date']}`
      // changeData(props.data, 'rootApp');
      changeObj({
        sheetName: 'rootApp',
        rowNumber: itemInfoRef.value.index,
        object: { history: scopeRef.history }
      })

    }
    visibleRef.value = false
  } else {
    alert('你没有输入内容!')
  }
}

const recordVisibleRef = ref(false)
const recordDataRef = ref([])

function openRecord(row) {
  recordDataRef.value = row.history?.split('\n').map(i => ({ record: i }))
  recordVisibleRef.value = true
}
</script>

<style scoped>

</style>