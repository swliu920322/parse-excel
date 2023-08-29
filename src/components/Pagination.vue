<template>
  <div class='flex justify-end p-4'>
    <ElPagination background layout='prev, pager, next, total' :total='total' @current-change='changePage' />
  </div>
</template>

<script setup lang='ts'>
import { defineProps, defineEmits } from 'vue'

const emit = defineEmits(['pageChange'])
const props = defineProps({
  total: {
    type: Number,
    default: 0
  }
})

function changePage(current) {
  emit('pageChange', current)
}
</script>

<style scoped>

</style>