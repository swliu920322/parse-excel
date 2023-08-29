<template>
  <div style='width: 150px' class='h-full'>
    <el-menu :default-active='activeRef' class='h-full'>
      <el-menu-item index='4'>
        <RouterLink to='/RootApp'>RootApp</RouterLink>
      </el-menu-item>
      <el-menu-item index='3'>
        <RouterLink to='/IndependentApp'>IndependentApp</RouterLink>
      </el-menu-item>
      <el-menu-item index='2'>
        <RouterLink to='/IntegratedApp'>IntegratedApp</RouterLink>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script setup lang='ts'>
import { ref } from 'vue'

const activeRef = ref(4)
</script>