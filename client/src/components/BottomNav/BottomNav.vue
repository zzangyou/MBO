<template>
  <a-menu
    v-model:selectedKeys="current"
    mode="horizontal"
    class="menu"
    @click="menuClick"
  >
    <template v-for="item in items">
      <a-menu-item :key="item.key" class="menu-item">
        <component :is="$icons[item.icon]" :style="{ fontSize: '32px' }" />
        <span class="item-title">{{ item.title }}</span>
      </a-menu-item>
    </template>
  </a-menu>
</template>
<script lang="ts" setup>
import { h, ref } from 'vue'
import { useRouter } from 'vue-router'
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons-vue'
import { MenuProps } from 'ant-design-vue'
const router = useRouter()
const current = ref<string[]>(['goal'])
const items = ref<MenuProps['items']>([
  {
    key: 'goal',
    icon: 'AimOutlined',
    label: '目标',
    title: '目标',
  },
  {
    key: 'task',
    icon: 'CarryOutOutlined',
    label: '任务',
    title: '任务',
  },
  {
    key: 'abstract',
    icon: 'HeartOutlined',
    label: '摘要',
    title: '摘要',
  },
  {
    key: 'user',
    icon: 'UserOutlined',
    label: '我的',
    title: '我的',
  },
])
const menuClick = ({ key }) => {
  console.log(key)
  // 获取到当前的key,并且跳转
  router.push({
    path: '/' + key,
  })
}
</script>
<style lang="scss">
.menu {
  display: flex;
  justify-content: space-around;
}
.ant-menu .ant-menu-title-content {
  display: flex;
  flex-direction: column;
  padding: 0 10px;
}
.item-title {
  margin-inline-start: 0 !important;
}
</style>
