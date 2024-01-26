<template>
  <a-card style="width: 100%;" class="goal-card">
    <div
      class="color-box"
      :style="{ backgroundColor: iGoalItem.goalColor }"
    ></div>
    <div class="goal-container">
      <div class="goal-item-title">
        {{ iGoalItem.goalName }}
      </div>
      <div class="goal-item-date">
        <CalendarOutlined />
        {{ iGoalItem.goalEnd }}
      </div>
    </div>
  </a-card>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { GoalItem } from '@/types/Goal/index.ts'
const iGoalItem = ref<GoalItem>({
  goalColor: '#B0AEC6',
  goalName: '😁 快点做完毕设吧',
  goalEnd: '2002年2月18日',
})
</script>

<style lang="scss" scoped>
:deep .ant-card-body {
  display: flex;
  padding: 20px !important;
}
.color-box {
  width: 8px;
  border-radius: 3px;
}
.goal-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 12px;

  .goal-item-title {
    font-weight: 500;
    font-size: 16px;
  }
  .goal-item-date {
    margin-top: 4px;
    font-size: 13px;
    color: #8c8888;
  }
}
</style>
