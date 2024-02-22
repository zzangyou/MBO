<template>
  <a-page-header
    style="border: 1px solid rgb(235, 237, 240); background-color: #f5f5f5;"
    title="已完成目标"
    @back="backToHome"
  ></a-page-header>
  <div class="layout-content">
    <div class="accomplished-container">
      <div class="goal-info">
        <span class="accomplished-year">{{ year }}</span>
        <span class="accomplished-number">
          (共完成{{ accomplishedGoalList.length }}个）
        </span>
      </div>
      <div class="accomplished-number">
        {{ accomplishedDate }}
        <a-space direction="vertical" style="width: 100%; margin-top: 10px;">
          <GoalItem
            v-for="item in accomplishedGoalList"
            :key="item.gid"
            :iGoalItem="item"
            @click="toAccomplishedDetail(item.gid)"
          >
            <template v-slot:date>
              <span class="time-cost">共{{ item.timeCost }}天</span>
            </template>
            <template v-slot:icon>
              <a-button type="link" @click.stop="toggleOpenReviewer">
                <template #icon>
                  <EditTwoTone :style="{ fontSize: '30px' }" />
                </template>
              </a-button>
              <GoalReviewer
                :openReviewer="openReviewer"
                :reviewItem="item"
                @update:openReviewer="toggleOpenReviewer"
              />
            </template>
            <template v-slot:review>
              <span class="goal-review" :style="{ color: item.goalColor }">
                {{ item.goalReview }}
              </span>
            </template>
          </GoalItem>
        </a-space>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { h, ref } from 'vue'
import { useRouter } from 'vue-router'
import { AccomplishedGoalItem } from '@/types/Goal/index.ts'
import GoalItem from '@/pages/Goal/components/GoalItem.vue'
import { GoalStatus } from '@/types/Goal/index.ts'
import GoalReviewer from '@/pages/Goal/components/GoalReviewer.vue'
const router = useRouter()
const backToHome = () => {
  router.go(-1)
}
const year = ref<number>(2023)
let openReviewer = ref<boolean>(false)
const accomplishedDate = ref<string>('2002-02-18')
const accomplishedGoalList = ref<AccomplishedGoalItem[]>([
  {
    gid: 1,
    state: GoalStatus.accomplished,
    goalColor: '#B0AEC6',
    goalName: '😁 快点做完毕设吧',
    timeCost: 100,
    goalEnd: '2023-06-20',
    accomplishedDate: '2023-02-18',
    goalReview: '完成指日可待',
    accomplishedTask: [
      {
        taskName: '不要偷偷刷小红书',
        taskStart: '2022年2月18日',
        taskEnd: '2023年2月18日',
      },
      {
        taskName: '不要偷偷刷小红书',
        taskStart: '2002年2月18日',
        taskEnd: '2023年2月18日',
      },
    ],
  },
  {
    gid: 2,
    state: GoalStatus.accomplished,
    goalColor: '#A391B7',
    goalName: '😁 减重减到93斤～～',
    timeCost: 100,
    goalEnd: '2023-06-20',
    accomplishedDate: '2023-02-18',
    goalReview: '完成指日可待',
  },
  {
    gid: 3,
    state: GoalStatus.accomplished,
    goalColor: '#B2BDBE',
    goalName: '😁 快点做完毕设吧',
    timeCost: 100,
    goalEnd: '2023-06-20',
    accomplishedDate: '2023-02-18',
    goalReview: '完成指日可待',
  },
  {
    gid: 4,
    state: GoalStatus.accomplished,
    goalColor: '#B0AEC6',
    goalName: '😁 快点做完毕设吧',
    timeCost: 100,
    goalEnd: '2023-06-20',
    accomplishedDate: '2023-02-18',
    goalReview: '完成指日可待',
  },
  {
    gid: 5,
    state: GoalStatus.accomplished,
    goalColor: '#B0AEC6',
    goalName: '😁 快点做完毕设吧',
    timeCost: 100,
    goalEnd: '2023-06-20',
    accomplishedDate: '2023-02-18',
  },
])
// 跳转至完成目标详情
const toAccomplishedDetail = (gid) => {
  //   openReviewer.value = !openReviewer.value
  router.push('/goal/' + gid)
}
// 跳转至目标复盘
const toggleOpenReviewer = (gid) => {
  console.log(openReviewer.value)
  openReviewer.value = !openReviewer.value
}
</script>

<style lang="scss" scoped>
$costColor: #e7ebff;
.layout-content {
  margin-top: 85px;
  height: 100%;
  background-color: rgb(235, 239, 249);
}
.goal-info {
  display: flex;
  align-items: flex-end;
  margin: 15px 0;
  padding: 0 10px;
  .accomplished-year {
    font-weight: 500;
    font-size: 20px;
    margin-right: 5px;
  }
}
.accomplished-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.accomplished-number {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;
  width: 90%;
  font-size: 15px;
  color: #8c8888;
}
.time-cost {
  margin: 5px 0;
  color: #4468c7;
  width: 50%;
  border-radius: 5px;
  background-color: $costColor;
}
.goal-review {
  font-weight: 500;
}
</style>
