<template>
  <div>
    <a-drawer
      :width="500"
      title="目标复盘"
      height="90%"
      placement="bottom"
      :open="props.openReviewer"
      @close="toggleDrawer"
      style="background-color: #ebeff9;"
    >
      <template #extra>
        <a-button type="link" @click="toggleDrawer">完成</a-button>
      </template>
      <a-space class="reviewer-container" direction="vertical" :size="30">
        <SmileTwoTone :style="{ fontSize: '55px' }" />
        <div style="color: #9aabbb; max-width: 65vw;">
          你提前{{ advancedDays }}天完成了任务"{{
            props.reviewItem.goalName
          }}"。共完成了{{
            props.reviewItem.accomplishedTask?.length || 0
          }}个任务，历时{{ props.reviewItem.timeCost }}天。
        </div>
        <a-textarea
          v-model:value="reviewContent"
          :rows="10"
          placeholder="😄 说说你的心情吧～"
          :maxlength="100"
          style="min-width: 65vw;"
        />
      </a-space>
    </a-drawer>
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue'
import { getDayDifference } from '@/utils/index.ts'
import { AccomplishedGoalItem } from '@/types/Goal/index.ts'
const reviewContent = ref<string>('')
const props = defineProps({
  openReviewer: Boolean,
  reviewItem: Object,
})
// const reviewItem=reactive<AccomplishedGoalItem>(props.reviewItem
// )
const emit = defineEmits(['update:openReviewer'])
const toggleDrawer = () => {
  emit('update:openReviewer')
}
const advancedDays = getDayDifference(
  props.reviewItem.accomplishedDate,
  props.reviewItem.goalEnd,
)
onMounted(() => {
  console.log(props.reviewItem)
})
</script>
<style lang="scss" scoped>
.drawer-container {
  background-color: #7dbcea;
}
.reviewer-container {
  display: flex;
  align-items: center;
  padding: 20px;
}
</style>
