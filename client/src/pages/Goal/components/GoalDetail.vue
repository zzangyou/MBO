<template>
  <a-page-header
    style="border: 1px solid rgb(235, 237, 240); background-color: #f5f5f5;"
    title=""
    @back="backToHome"
  >
    <template #extra>
      <a-button :icon="h(EllipsisOutlined)" type="text" size="large" />
    </template>
  </a-page-header>
  <a-card :bordered="false" class="layout-content">
    <div class="goal-detail">
      <div class="goal-header">
        <div
          class="color-box"
          :style="{ backgroundColor: iGoalItem.goalColor }"
        ></div>
        <div class="goal-item-title">
          {{ iGoalItem.goalName }}
        </div>
      </div>
      <div class="goal-description">
        <SmileOutlined />
        {{ iGoalItem.goalDescription }}
      </div>
    </div>

    <a-card-grid class="time-box" style="width: 50%; text-align: center;">
      剩余{{ remainingDays }}天
      <div class="goal-end">{{ iGoalItem.goalEnd }}</div>
      <a-progress :percent="30" :showInfo="false" strokeColor="#1677ff" />
    </a-card-grid>

    <a-card-grid
      class="progress-card"
      style="width: 40%; text-align: center;"
      :hoverable="false"
    >
      <a-progress
        type="circle"
        :percent="iGoalItem.goalProgress"
        :showInfo="false"
        :size="30"
      />
      <div class="progress-card-info">
        <div>{{ iGoalItem.goalProgress }}%</div>
        <div class="progress-card-text">目标进度</div>
      </div>
    </a-card-grid>
    <a-card-grid class="progress-card" style="width: 50%; text-align: center;">
      <FlagOutlined :style="{ fontSize: '25px', color: '#1677ff' }" />
      <div class="progress-card-info">
        <div>{{ iGoalItem.completedTimes }}</div>
        <div class="progress-card-text">已完成次数</div>
      </div>
    </a-card-grid>
    <a-card-grid class="progress-card" style="width: 40%; text-align: center;">
      <ClockCircleOutlined
        :style="{ fontSize: '25px', color: '#1677ff', marginleft: '5px' }"
      />
      <div class="progress-card-info">
        <div>{{ iGoalItem.goalTiming }}</div>
        <div class="progress-card-text">目标计时</div>
      </div>
    </a-card-grid>
    <div class="todo-list">
      <div class="todo-task">待办任务 {{ iGoalItem.taskList.length }}</div>
      <TaskItem />
    </div>
    <a-button type="primary" @click="" class="create-button">创建任务</a-button>
  </a-card>
</template>
<script lang="ts" setup>
import { h, ref } from 'vue'
import { EllipsisOutlined } from '@ant-design/icons-vue'
import { useRouter } from 'vue-router'
import { GoalItem } from '@/types/Goal/index.ts'
import { getDayDifference } from '@/utils/index.ts'
import TaskItem from '@/components/TaskItem/TaskItem.vue'
const bottom = ref<number>(100)
const iGoalItem = ref<GoalItem>({
  goalColor: '#B0AEC6',
  goalName: '😁 快点做完毕设吧',
  goalEnd: '2023-06-20',
  goalDescription: '别在发呆了！赶紧干活呜呜呜',
  goalProgress: 40,
  completedTimes: 8,
  goalTiming: 0,
  taskList: [
    {
      taskName: '不要偷偷刷小红书',
      taskStart: '20022年2月18日',
      taskEnd: '20023年2月18日',
    },
  ],
})
const router = useRouter()
const remainingDays = getDayDifference(iGoalItem.value.goalEnd)
const backToHome = () => {
  console.log('back', iGoalItem.value.goalEnd)
  router.go(-1)
}
</script>
<style lang="scss" scoped>
$boxColor: #ced9f6;
$textColor: #3f566a;
$shallowColor: #8c8888;

:deep .ant-card-body {
  padding: 15px !important;
}
:deep .ant-card-grid {
  font-weight: 500;
  margin: 7px;
  padding: 10px 15px;
  border-radius: 6px;
}
.goal-detail {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  .goal-header {
    display: flex;
    height: 30px;
    align-items: center;
    .color-box {
      height: 100%;
      width: 8px;
      border-radius: 3px;
    }
    .goal-item-title {
      margin-left: 10px;
      font-weight: 500;
      font-size: 16px;
    }
  }
  .goal-description {
    margin: 10px 0;
    padding: 2px 5px;
    color: $textColor;
    background-color: $boxColor;
    border-radius: 4px;
  }
}
.time-box {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .goal-end {
    font-size: 13px;
    color: $shallowColor;
  }
}
.progress-card {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .progress-card-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 15px;
    .progress-card-text {
      font-size: 13px;
      color: $shallowColor;
    }
  }
}
.todo-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}
.todo-task {
  font-weight: 500;
  margin: 10px;
  color: $textColor;
}
.create-button {
  position: fixed;
  bottom: 50px;
  left: 50%;
  transform: translate(-50%, 0);
}
</style>
