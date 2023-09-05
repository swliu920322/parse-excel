<template>
  <div class='flex justify-end p-4'>
    <ElPagination
      background
      :page-sizes='[10, 20, 30, 40, 50]'
      layout='sizes, prev, pager, next, total' :total='total'
      @current-change='changePage'
      @size-change='sizeChange'
    />
  </div>
</template>

<script setup lang='ts'>

const emit = defineEmits(['pageChange'])
const props = defineProps({
  total: {
    type: Number,
    default: 0
  }
})

function changePage(current) {
  emit('pageChange', { current })
}
function sizeChange(pageSize) {
  emit('pageChange', { pageSize })
}
</script>

<style scoped>

</style>