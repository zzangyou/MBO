<template>
  <div>
    <a-drawer
      :width="500"
      title="选择模板"
      height="90%"
      placement="bottom"
      :open="props.showCenter"
      @close="toggleCenter"
    >
      <template #closeIcon>
        <LeftOutlined />
      </template>
      <a-row :gutter="16">
        <a-col :span="12" v-for="item in modelList" :key="item.mid">
          <a-card style="margin-top: 15px;">
            <template #title>
              <a-checkbox v-for="tItem in item.taskList" :key="tItem.tid">
                {{ tItem.taskName }}
              </a-checkbox>
            </template>
            <div class="goal-container">
              <div class="goal-item-title">
                {{ item.goalName }}
              </div>
              <div class="goal-item-description">
                {{ item.goalDescription }}
              </div>
            </div>
          </a-card>
        </a-col>
      </a-row>
    </a-drawer>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { GoalItem } from '@/types/Goal/index.ts'
const props = defineProps({
  showCenter: Boolean,
})
const emit = defineEmits(['update:showCenter'])

const toggleCenter = () => {
  emit('update:showCenter')
}
const modelList = ref<GoalItem[]>([
  {
    mid: 1,
    goalColor: '#B0AEC6',
    goalName: '😁 快点做完毕设吧',
    goalDescription: '天道酬勤',
    goalEnd: '2002年2月18日',
    taskList: [
      {
        tid: 1,
        taskName: '🤫不要偷偷刷小红书',
        taskStart: '20022年2月18日',
        taskEnd: '20023年2月18日',
      },
      {
        tid: 2,
        taskName: '📝请保持专注',
        taskStart: '20022年2月18日',
        taskEnd: '20023年2月18日',
      },
      {
        tid: 3,
        taskName: '🪞做一个美貌与智慧并存的镁铝',
        taskStart: '20022年2月18日',
        taskEnd: '20023年2月18日',
      },
      {
        tid: 4,
        taskName: '👀不要偷偷看微信',
        taskStart: '20022年2月18日',
        taskEnd: '20023年2月18日',
      },
      {
        tid: 5,
        taskName: '📝请保持专注',
        taskStart: '20022年2月18日',
        taskEnd: '20023年2月18日',
      },
      {
        tid: 6,
        taskName: '🪞做一个美貌与智慧并存的镁铝',
        taskStart: '20022年2月18日',
        taskEnd: '20023年2月18日',
      },
      {
        tid: 7,
        taskName: '👀不要偷偷看微信',
        taskStart: '20022年2月18日',
        taskEnd: '20023年2月18日',
      },
    ],
  },
  {
    mid: 2,
    goalColor: '#B0AEC6',
    goalName: '😁 减肥瘦到90斤',
    goalDescription: '天道酬勤，越努力越幸运,fighting加油输赢～～',
    goalEnd: '2002年2月18日',
    taskList: [
      {
        tid: 1,
        taskName: '🤫不要偷偷刷小红书',
        taskStart: '20022年2月18日',
        taskEnd: '20023年2月18日',
      },
      {
        tid: 2,
        taskName: '📝请保持专注',
        taskStart: '20022年2月18日',
        taskEnd: '20023年2月18日',
      },
      {
        tid: 3,
        taskName: '🪞做一个美貌与智慧并存的镁铝',
        taskStart: '20022年2月18日',
        taskEnd: '20023年2月18日',
      },
      {
        tid: 4,
        taskName: '👀不要偷偷看微信',
        taskStart: '20022年2月18日',
        taskEnd: '20023年2月18日',
      },
    ],
  },
  {
    mid: 3,
    goalColor: '#B0AEC6',
    goalName: '😁 好好发展自媒体～～',
    goalDescription: '天道酬勤',
    goalEnd: '2002年2月18日',
    taskList: [
      {
        tid: 1,
        taskName: '🤫不要偷偷刷小红书',
        taskStart: '20022年2月18日',
        taskEnd: '20023年2月18日',
      },
      {
        tid: 2,
        taskName: '📝请保持专注',
        taskStart: '20022年2月18日',
        taskEnd: '20023年2月18日',
      },
      {
        tid: 3,
        taskName: '🪞做一个美貌与智慧并存的镁铝',
        taskStart: '20022年2月18日',
        taskEnd: '20023年2月18日',
      },
      {
        tid: 4,
        taskName: '👀不要偷偷看微信',
        taskStart: '20022年2月18日',
        taskEnd: '20023年2月18日',
      },
    ],
  },
])
</script>
<style lang="scss" scoped>
:deep .ant-drawer-title {
  margin-right: 10px !important;
}
:deep .ant-card .ant-card-head-title {
  display: flex;
  flex-direction: column;
}
:deep .ant-checkbox + span {
  white-space: nowrap; /* 防止内容换行 */
  overflow: hidden; /* 隐藏超出元素宽度的内容 */
  text-overflow: ellipsis; /* 在文本溢出时显示省略号 */
}
:deep .ant-card-body {
  display: flex;
  padding: 12px 5px !important;
  width: 100%;
}
:deep .ant-card-head {
  padding: 4px 9px !important;
}

.goal-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 12px;
  width: 100%;

  .goal-item-title {
    font-weight: 500;
    font-size: 16px;
  }
  .goal-item-description {
    font-size: 12px;
    color: #8c8888;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
