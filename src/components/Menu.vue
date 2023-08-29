<template>
  <div style='width: 150px'>
    <el-menu :default-active='activeRef'>
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
const activeRef = ref(4)
</script>