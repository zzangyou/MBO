<template>
  <a-page-header
    style="
      border: 1px solid rgb(235, 237, 240);
      background-color: rgb(235, 239, 249);
    "
    title="1月"
  >
    <template #extra>
      <a-button
        key="1"
        type="link"
        shape="round"
        style="margin-right: 10px;"
        @click="showCalendarReviewer"
      >
        <template #icon>
          <CalendarOutlined />
        </template>
      </a-button>
      <a-button key="2" type="link" shape="round" @click="toCreateTask">
        <template #icon>
          <PlusOutlined />
        </template>
      </a-button>
    </template>
  </a-page-header>
  <TaskCreator
    :openTaskCreator="openTaskCreator"
    @update:openTaskCreator="toCreateTask"
  />
  <div class="task-content">
    <vue-hash-calendar
      v-if="showWeekView"
      class="calendar-container"
      :show-week-view="true"
      :show-action="false"
      disabled-scroll="vertical"
      @change="onChange"
    ></vue-hash-calendar>
    <CalendarViewer v-if="!showWeekView"></CalendarViewer>
    <div v-show="showWeekView" class="todo-list">
      <span class="todo-task">当日任务</span>
      <TaskItem />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import CalendarViewer from '@/pages/Task/components/CalendarViewer.vue'
import TaskCreator from '@/components/TaskCreator/TaskCreator.vue'
import TaskItem from '@/components/TaskItem/TaskItem.vue'

let openTaskCreator = ref<boolean>(false)
let showWeekView = ref<boolean>(true)

const toCreateTask = () => {
  openTaskCreator.value = !openTaskCreator.value
}
const showCalendarReviewer = () => {
  showWeekView.value = !showWeekView.value
}
const onChange = (date) => {
  console.log('onChange', date)
}
</script>
<style lang="scss" scoped>
.task-content {
  margin-top: 90px;
  min-height: 900px;
}
:deep .calendar_week {
  background: transparent !important;
}
:deep .calendar_content {
  background: transparent !important;
}
:deep .calendar_group_li {
  background-color: transparent;
}
:deep .calendar_group {
  // min-height: 600px;
}

.calendar-container {
  margin-top: 10px;
}
.todo-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 15px 0;
  width: 100%;
}
.todo-task {
  font-weight: 500;
  margin: 10px;
  color: #3f566a;
}
.events {
  list-style: none;
  margin: 0;
  margin-top: 5px;
  padding: 0;
}
// .events .ant-badge-status {
//   overflow: hidden;
//   white-space: nowrap;
//   width: 100%;
//   text-overflow: ellipsis;
//   font-size: 12px;
// }
// .events-container {
//   overflow: hidden;
//   white-space: nowrap;
//   width: 100%;
//   text-overflow: ellipsis;
//   font-size: 12px;
// }
</style>
