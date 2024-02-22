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
    <router-link to="/goal/accomplished">
      🌟 已完成目标
      <RightOutlined />
    </router-link>
  </a-page-header>
  <GoalCreator :open="open" @update:open="toggleModal" />
  <a-space direction="vertical" class="layout-content">
    <GoalItem
      @click="toGoalDetail(item.gid)"
      v-for="item in iGoalList"
      :key="item.gid"
      :iGoalItem="item"
    >
      <template v-slot:date>
        <div class="goal-item-date">
          <CalendarOutlined />
          {{ item.goalEnd }}
        </div>
      </template>
      <template v-slot:icon>
        <a-progress
          type="circle"
          :percent="item.goalProgress"
          :showInfo="false"
          :size="30"
        />
      </template>
    </GoalItem>
  </a-space>
</template>

<script lang="ts" setup>
import { h, ref, onMounted } from 'vue'
import { Button } from 'ant-design-vue'
import { useRouter } from 'vue-router'
import GoalCreator from '@/components/GoalCreator/GoalCreator.vue'
import { GoalStatus } from '@/types/Goal/index.ts'
import GoalItem from '@/pages/Goal/components/GoalItem.vue'
let open = ref<boolean>(false)
const gid = ref<Number>(1)
const router = useRouter()

const iGoalList = ref<GoalItem[]>([
  {
    gid: 1,
    state: GoalStatus.progress,
    goalProgress: 40,
    goalColor: '#B0AEC6',
    goalName: '😁 快点做完毕设吧',
    goalEnd: '2023-06-20',
    goalTiming: 0,
    goalDescription: '别在发呆了！赶紧干活呜呜呜',
    completedTimes: 8,
    taskList: [
      {
        taskName: '不要偷偷刷小红书',
        taskStart: '20022年2月18日',
        taskEnd: '20023年2月18日',
      },
    ],
  },
  {
    gid: 2,
    state: GoalStatus.progress,
    goalProgress: 40,
    goalColor: '#B0AEC6',
    goalName: '😁 快点做完毕设吧',
    goalEnd: '2023-06-20',
    goalTiming: 0,
    goalDescription: '别在发呆了！赶紧干活呜呜呜',
    completedTimes: 8,
    taskList: [
      {
        taskName: '不要偷偷刷小红书',
        taskStart: '20022年2月18日',
        taskEnd: '20023年2月18日',
      },
    ],
  },
  {
    gid: 3,
    state: GoalStatus.progress,
    goalProgress: 40,
    goalColor: '#B0AEC6',
    goalName: '😁 快点做完毕设吧',
    goalEnd: '2023-06-20',
    goalTiming: 0,
    goalDescription: '别在发呆了！赶紧干活呜呜呜',
    completedTimes: 8,
    taskList: [
      {
        taskName: '不要偷偷刷小红书',
        taskStart: '20022年2月18日',
        taskEnd: '20023年2月18日',
      },
    ],
  },
  {
    gid: 4,
    state: GoalStatus.progress,
    goalProgress: 40,
    goalColor: '#B0AEC6',
    goalName: '😁 快点做完毕设吧',
    goalEnd: '2023-06-20',
    goalTiming: 0,
    goalDescription: '别在发呆了！赶紧干活呜呜呜',
    completedTimes: 8,
    taskList: [
      {
        taskName: '不要偷偷刷小红书',
        taskStart: '20022年2月18日',
        taskEnd: '20023年2月18日',
      },
    ],
  },
  {
    gid: 5,
    state: GoalStatus.progress,
    goalProgress: 40,
    goalColor: '#B0AEC6',
    goalName: '😁 快点做完毕设吧',
    goalEnd: '2023-06-20',
    goalTiming: 0,
    goalDescription: '别在发呆了！赶紧干活呜呜呜',
    completedTimes: 8,
    taskList: [
      {
        taskName: '不要偷偷刷小红书',
        taskStart: '20022年2月18日',
        taskEnd: '20023年2月18日',
      },
    ],
  },
  {
    gid: 6,
    state: GoalStatus.progress,
    goalProgress: 40,
    goalColor: '#B0AEC6',
    goalName: '😁 快点做完毕设吧',
    goalEnd: '2023-06-20',
    goalTiming: 0,
    goalDescription: '别在发呆了！赶紧干活呜呜呜',
    completedTimes: 8,
    taskList: [
      {
        taskName: '不要偷偷刷小红书',
        taskStart: '20022年2月18日',
        taskEnd: '20023年2月18日',
      },
    ],
  },
  {
    gid: 7,
    state: GoalStatus.progress,
    goalProgress: 40,
    goalColor: '#B0AEC6',
    goalName: '😁 快点做完毕设吧',
    goalEnd: '2023-06-20',
    goalTiming: 0,
    goalDescription: '别在发呆了！赶紧干活呜呜呜',
    completedTimes: 8,
    taskList: [
      {
        taskName: '不要偷偷刷小红书',
        taskStart: '20022年2月18日',
        taskEnd: '20023年2月18日',
      },
    ],
  },
  {
    gid: 8,
    state: GoalStatus.progress,
    goalProgress: 40,
    goalColor: '#B0AEC6',
    goalName: '😁 快点做完毕设吧',
    goalEnd: '2023-06-20',
    goalTiming: 0,
    goalDescription: '别在发呆了！赶紧干活呜呜呜',
    completedTimes: 8,
    taskList: [
      {
        taskName: '不要偷偷刷小红书',
        taskStart: '20022年2月18日',
        taskEnd: '20023年2月18日',
      },
    ],
  },
])

const toggleModal = () => {
  console.log(open.value)
  open.value = !open.value
}
const toGoalDetail = (gid) => {
  console.log(gid)
  router.push('/goal/' + gid)
}
</script>
<style lang="scss" scoped>
.layout-content {
  width: 90%;
  min-height: 900px;
}
:deep .ant-page-header-content {
  display: flex;
  padding-top: 0;
  color: #1677ff;
}
.goal-item-date {
  margin-top: 4px;
  font-size: 13px;
  color: #8c8888;
}
</style>
