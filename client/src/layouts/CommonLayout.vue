<template>
  <a-space direction="vertical" :style="{ width: '100%' }" :size="[0, 48]">
    <a-layout>
      <a-layout-content :style="contentStyle"><router-view /></a-layout-content>
      <a-layout-footer :style="footerStyle"><BottomNav /></a-layout-footer>
    </a-layout>
  </a-space>
</template>
<script lang="ts" setup>
import type { CSSProperties } from 'vue'
import BottomNav from '@/components/BottomNav/BottomNav.vue'

const contentStyle: CSSProperties = {
  backgroundColor: '#ebeff9',
  textAlign: 'center',
  height: '100%',
  minHeight: 620,
  color: '#fff',
}
const footerStyle: CSSProperties = {
  zIndex: 111,
  position: 'fixed',
  padding: '10px',
  bottom: 0,
  width: '100%',
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#fff',
  padding: 0,
}
</script>
<style lang="scss" scoped>
:deep .menu {
  padding: 10px 0 0 0;
}
</style>
