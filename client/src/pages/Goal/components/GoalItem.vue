<template>
  <a-card style="width: 370px;" class="goal-card">
    <div class="color-box" :style="{ backgroundColor: goalColor }"></div>
    <div class="goal-container">
      <div class="goal-item-title">
        😁 快点做完毕设吧
      </div>
      <div class="goal-item-date">
        <CalendarOutlined />
        2002年2月18日截止
      </div>
    </div>
  </a-card>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const goalColor = ref<string>('#B0AEC6')
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
  // border-left: 6px solid;
  // border-radius: 2px;

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
