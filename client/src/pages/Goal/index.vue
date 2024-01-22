<template>
  <a-page-header
    style="border: 1px solid rgb(235, 237, 240); background-color: #f5f5f5;"
    title="目标列表"
  >
    <template #extra>
      <a-button key="1" type="primary" shape="round" @click="toggleModal">
        <template #icon>
          <PlusOutlined />
        </template>
        创建目标
      </a-button>
    </template>
  </a-page-header>
  <GoalCreator :open="open" @update:open="toggleModal" />
  <a-space direction="vertical">
    <GoalItem />
    <GoalItem />
    <GoalItem />
    <GoalItem />
    <GoalItem />
  </a-space>
</template>

<script lang="ts" setup>
import { h, ref } from 'vue'
import { Button } from 'ant-design-vue'
import GoalCreator from '@/components/GoalCreator/GoalCreator.vue'
import GoalItem from '@/pages/Goal/components/GoalItem.vue'
let open = ref<boolean>(false)
const toggleModal = () => {
  console.log('click')
  console.log(open.value)
  open.value = !open.value
}
</script>
