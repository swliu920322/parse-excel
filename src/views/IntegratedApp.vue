<template>
  <div>
    <el-button type='primary' @click='download'>下载</el-button>
    <Table :data='integrated'>
      <el-table-column prop='par.name' label='Root-App' min-width='140' />
      <el-table-column prop='name' label='Sub-App' />
      <el-table-column prop='po.displayName' label='Sub-Owner' />
      <el-table-column prop='category' label='Dependency Desc' />
      <el-table-column prop='' label='Sub-TargetDate'>
      </el-table-column>
      <el-table-column prop='rootTargetDate' label='Root-TargetDate'>
        <template #default='scope'>
          <el-date-picker v-if='scope.$index === editIndexRef' v-model='tempValueRef.rootTargetDate' />
          <span v-else>{{ scope.row.rootTargetDate }}</span>
        </template>
      </el-table-column>
      <el-table-column prop='' label='Time Risk' />
      <el-table-column prop='' label='操作' width='200'>
        <template #default='scope'>
          <template v-if='scope.$index === editIndexRef'>
            <el-button @click='save(scope)'>保存</el-button>
            <el-button @click='toCancel'>取消</el-button>
          </template>
          <template v-else>
            <el-button @click='toEdit(scope)'>修改</el-button>
          </template>
        </template>
      </el-table-column>
    </Table>
  </div>
</template>

<script setup lang='ts'>
import { integrated, allRoutes } from '@/util'
import { onMounted, ref } from 'vue'
import Table from '@/components/Table.vue'
import { DataDeal, exportExcel } from '@/util/excel'

onMounted(() => {
  console.log(integrated)
})


let tempValueRef = ref(undefined)

const editIndexRef = ref('')

function toCancel() {
  if (tempValueRef.value) {
    tempValueRef.value = undefined
  }
  editIndexRef.value = ''
}

function save(scope) {
  Object.entries(tempValueRef.value).forEach(([key, value]) => {
    scope.row[key] = value
  })
  toCancel()
}

function toEdit(scope) {
  toCancel()
  const { $index, row } = scope
  tempValueRef.value = { ...row }
  editIndexRef.value = $index
}

function download() {
  exportExcel()
}
</script>

<style scoped>

</style>