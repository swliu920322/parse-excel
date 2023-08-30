<script setup lang='ts'>

import Menu from '@/components/Menu.vue'


</script>

<template>
  <view class='flex h-full overflow-hidden'>
    <header style='height: 100%;'>
      <Menu />
    </header>
    <div class='p-4 flex-1 overflow-auto'>
      <RouterView />
    </div>
  </view>
</template>

<style scoped>

</style>
