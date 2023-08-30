<template>
  <div style='width: 150px' class='h-full'>
    <el-menu router class='h-full'>
      <el-menu-item index='IndependentApp'>
        <RouterLink to='/IndependentApp'>IndependentApp</RouterLink>
      </el-menu-item>
      <el-menu-item index='RootApp'>
        <RouterLink to='/RootApp'>RootApp</RouterLink>
      </el-menu-item>
      <el-menu-item index='IntegratedApp'>
        <RouterLink to='/IntegratedApp'>IntegratedApp</RouterLink>
      </el-menu-item>
      <el-menu-item index='demo'>
        <RouterLink to='/demo'>demo</RouterLink>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script setup lang='ts'>

</script>