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
  <header>
    <Menu />
  </header>

  <RouterView />
</template>

<style scoped>

</style>
