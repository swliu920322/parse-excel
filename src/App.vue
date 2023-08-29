<script setup lang='ts'>
import { RouterLink, RouterView } from 'vue-router'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting
} from '@element-plus/icons-vue'
import Menu from '@/components/Menu.vue'
</script>

<template>
  <view class='flex h-full'>
    <header style='height: 100%;'>
      <Menu />
    </header>
    <div class='p-4'>
      <RouterView />
    </div>

  </view>
</template>

<style scoped>

</style>
