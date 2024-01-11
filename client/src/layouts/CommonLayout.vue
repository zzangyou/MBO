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
import BottomNav from '../components/BottomNav/BottomNav.vue'

const contentStyle: CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
}
const footerStyle: CSSProperties = {
  position: 'fixed',
  bottom: 0,
  width: '100%',
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
  padding: 0,
}
</script>
