<template>
  <vue-hash-calendar
    :show-week-view="false"
    :show-action="false"
    disabled-scroll="vertical"
  >
    <template v-slot:day="scope">
      <div v-if="showWeekView">
        {{ scope?.date.day }}
      </div>
      <div v-else="showWeekView" class="events-container">
        {{ scope?.date.day }}
        <div>
          <ul class="events">
            <li
              v-for="item in getListData(scope?.date.day)"
              :key="item.content"
            >
              <a-badge :text="item.content" />
            </li>
          </ul>
        </div>
      </div>
    </template>
  </vue-hash-calendar>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { Dayjs } from 'dayjs'
const value = ref<Dayjs>()
const getListData = (value) => {
  let listData
  switch (value) {
    case 8:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' },
      ]
      break
    case 10:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' },
        { type: 'error', content: 'This is error event.' },
      ]
      break
    case 15:
      listData = [
        { type: 'warning', content: 'This is warning event' },
        { type: 'success', content: 'This is very long usual event。。....' },
        { type: 'error', content: 'This is error event 1.' },
        { type: 'error', content: 'This is error event 2.' },
        { type: 'error', content: 'This is error event 3.' },
        { type: 'error', content: 'This is error event 4.' },
      ]
      break
    default:
  }
  return listData || []
}

const onChange = (date) => {
  console.log('onChange', date)
}
</script>
<style lang="scss" scoped>
.events {
  list-style: none;
  margin: 0;
  padding: 0;
}
.events .ant-badge-status {
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  text-overflow: ellipsis;
  font-size: 12px;
}
.notes-month {
  text-align: center;
  font-size: 28px;
}
.notes-month section {
  font-size: 28px;
}
:deep .calendar_day {
  overflow: auto;
  width: 11vw !important;
  height: 24vw !important;
  border-radius: 2px !important;
  padding-top: 10px;
  align-items: flex-start;
}
.events-container {
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  text-overflow: ellipsis;
  font-size: 12px;
}
</style>
