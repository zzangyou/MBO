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
            @click="toAccomlishedDetail(item.gid)"
          >
            <template v-slot:date>
              <span class="time-cost">共{{ item.timeCost }}天</span>
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
const router = useRouter()
const backToHome = () => {
  router.go(-1)
}
const year = ref<number>(2023)
const accomplishedDate = ref<string>('2002-02-18')
const accomplishedGoalList = ref<AccomplishedGoalItem[]>([
  {
    gid: 1,
    goalColor: '#B0AEC6',
    goalName: '😁 快点做完毕设吧',
    timeCost: 100,
    accomplishedDate: '20023年2月18日',
  },
  {
    gid: 2,
    goalColor: '#B0AEC6',
    goalName: '😁 快点做完毕设吧',
    timeCost: 100,
    accomplishedDate: '20023年2月18日',
  },
  {
    gid: 3,
    goalColor: '#B0AEC6',
    goalName: '😁 快点做完毕设吧',
    timeCost: 100,
    accomplishedDate: '20023年2月18日',
  },
  {
    gid: 4,
    goalColor: '#B0AEC6',
    goalName: '😁 快点做完毕设吧',
    timeCost: 100,
    accomplishedDate: '20023年2月18日',
  },
  {
    gid: 5,
    goalColor: '#B0AEC6',
    goalName: '😁 快点做完毕设吧',
    timeCost: 100,
    accomplishedDate: '20023年2月18日',
  },
])
const toAccomlishedDetail = (gid) => {
  console.log(gid)
  router.push('/goal/' + gid)
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
</style>
