<template>
  <a-list
    @click="finishGoal"
    item-layout="horizontal"
    :data-source="data"
    style="
       {
        width: 100%;
      }
    "
  >
    <template #renderItem="{ item }">
      <a-list-item>
        <a-list-item-meta>
          <template #description>
            <span class="todo-text">今日待办</span>
            <SyncOutlined />
            1月7日-2月2日
          </template>
          <template #title>
            <a href="https://www.antdv.com/">{{ item.taskName }}</a>
          </template>
          <template #avatar>
            <a-checkbox v-model:checked="item.checked"></a-checkbox>
          </template>
        </a-list-item-meta>
      </a-list-item>
    </template>
  </a-list>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

interface DataItem {
  title: string
}
const data: DataItem[] = ref([
  {
    taskName: 'Ant Design Title 1',
    checked: false,
  },
  {
    taskName: 'Ant Design Title 2',
    checked: false,
  },
  {
    taskName: 'Ant Design Title 3',
    checked: false,
  },
  {
    taskName: 'Ant Design Title 4',
    checked: false,
  },
  {
    taskName: 'Ant Design Title 5',
    checked: false,
  },
  {
    taskName: 'Ant Design Title 6',
    checked: false,
  },
])
const finishGoal = () => {}
</script>
<style lang="scss" scoped>
.ant-list {
  width: 100%;
}
:deep .ant-list-item-meta-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.todo-text {
  color: #4096ff;
  margin: 0 7px 0 0;
}

.ant-list-item {
  border: 1px solid rgba(5, 5, 5, 0.06);
  background-color: #fff;
  margin: 12px;
  border-radius: 10px;
  padding: 8px 20px !important;
}
</style>
