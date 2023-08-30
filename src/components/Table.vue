<template>
  <div class='flex flex-col h-full'>
    <el-table :data='dataSourceRef' stripe  class='flex-1'>
      <el-table-column type='index' label='#' width='50'>
        <template #default='scope'>
          {{ (pageInfo.current - 1) * pageInfo.pageSize + 1 + scope.$index }}
        </template>
      </el-table-column>
      <slot />
    </el-table>
    <Pagination :total='data.length' @pageChange='pageChange' />
  </div>
</template>

<script lang='ts' setup>
import { defineProps, reactive, computed } from 'vue'
import Pagination from '@/components/Pagination.vue'

const props = defineProps({
  data: {
    type: Array,
    default: () => []
  }
})
const pageInfo = reactive({
  current: 1,
  pageSize: 10
})
const dataSourceRef = computed(() => {
  const { current, pageSize } = pageInfo
  const start = (current - 1) * pageSize
  const end = current * pageSize
  return props.data.slice(start, end)
})

function pageChange(page) {
  if (page.current) {
    pageInfo.current = page.current
  } else if (page.pageSize) {
    pageInfo.pageSize = page.pageSize
  }
}
</script>

<style scoped>

</style>