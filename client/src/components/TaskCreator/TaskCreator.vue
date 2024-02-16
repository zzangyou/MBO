<template>
  <div>
    <a-drawer
      :width="500"
      title="创建任务"
      height="90%"
      placement="bottom"
      :open="props.openTaskCreator"
      @close="toggleTaskCreator"
    >
      <template #extra>
        <a-button type="link" @click="toggleTaskCreator">添加</a-button>
      </template>
      <a-space direction="vertical" size="large">
        <a-card class="text-input">
          <a-input
            v-model:value="taskItem.taskName"
            placeholder=" 任务名称"
            class="task-input"
          >
            <template #prefix><smile-outlined /></template>
          </a-input>
          <a-textarea
            v-model:value="taskItem.taskDescription"
            placeholder="备注"
            :rows="1"
            :bordered="false"
          ></a-textarea>
        </a-card>
        <a-collapse v-model:activeKey="activeKey" expandIconPosition="end">
          <a-collapse-panel key="1" class="date-box">
            <template #header>
              <CalendarOutlined />
              日期和循环
            </template>
            <a-radio-group
              v-model:value="dateOption"
              class="date-option"
              size="large"
            >
              <a-radio-button value="single">单天</a-radio-button>
              <a-radio-button value="period">跨天</a-radio-button>
            </a-radio-group>
            <a-date-picker
              v-if="dateOption == 'single'"
              v-model:value="taskItem.taskDate"
            />
            <a-range-picker
              v-else
              :show-time="{ format: 'YYYY-MM-DD' }"
              format="YYYY-MM-DD"
              :bordered="false"
              :placeholder="['起始时间', '结束时间']"
              class="task-picker"
              @change="onRangeChange"
              @ok="onRangeOk"
            ></a-range-picker>
            <div class="cycle-box">
              <span>
                <RetweetOutlined style="" />
                循环
              </span>
              <a-switch
                v-show="dateOption == 'period'"
                v-model:checked="taskItem.isCircular"
              />
              <span v-show="dateOption == 'single'">
                单日任务不可设置循环
              </span>
            </div>
          </a-collapse-panel>
        </a-collapse>
        <a-collapse v-model:activeKey="activeKey" expandIconPosition="end">
          <a-collapse-panel key="2" class="date-box">
            <template #header>
              <ClockCircleOutlined />
              时间和提醒
            </template>
            <a-radio-group
              v-model:value="timeOption"
              class="date-option"
              size="large"
            >
              <a-radio-button value="point">时间点</a-radio-button>
              <a-radio-button value="part">时间段</a-radio-button>
            </a-radio-group>
            <a-time-picker
              v-if="timeOption == 'point'"
              v-model:value="taskItem.taskTime"
              class="time-box"
              format="HH:mm"
            />
            <a-time-range-picker
              v-else
              :bordered="false"
              :placeholder="['起始时间', '结束时间']"
              format="HH:mm"
              v-model:value="taskItem.taskTime"
              class="task-picker"
            />
            <div class="cycle-box">
              <span>
                <BellOutlined />
                提醒
              </span>
              <a-switch v-model:checked="taskItem.isMention" />
            </div>
          </a-collapse-panel>
        </a-collapse>
        <a-select
          ref="select"
          v-model:value="taskItem.taskPriority"
          style="width: 120px;"
          :options="priorityOptions"
        >
          <template #placeholder>
            <InfoCircleOutlined />
            优先级
          </template>
          <template #option="{ value: val, label, color}">
            <span :style="{ color: color, fontWeight: 500 }">{{ label }}</span>
          </template>
        </a-select>
        <a-select
          ref="select"
          v-model:value="taskItem.belongTo"
          style="width: 120px;"
          :options="belongOptions"
        >
          <template #placeholder>
            <PushpinOutlined />
            所属目标
          </template>
          <template #option="{ value: val, label, color}">
            <div style="display: flex;">
              <div class="color-box" :style="{ backgroundColor: color }"></div>
              <span :style="{ fontWeight: 500 }">{{ label }}</span>
            </div>
          </template>
        </a-select>
      </a-space>
    </a-drawer>
  </div>
</template>
<script lang="ts" setup>
import { taskItem, TaskPriority } from '@/types/Task/index.ts'
import { onMounted, ref, watch } from 'vue'
import { Dayjs } from 'dayjs'
import type { SelectProps } from 'ant-design-vue'

const props = defineProps({
  openTaskCreator: Boolean,
})
const emit = defineEmits(['update:openTaskCreator'])
let showCenter = ref<boolean>(false)
let dateOption = ref<string>('single')
let timeOption = ref<string>('point')

const toggleTaskCreator = () => {
  emit('update:openTaskCreator')
}
const priorityOptions = ref<SelectProps['options']>([
  {
    value: TaskPriority.Top,
    color: '#002060',
    label: '重要且优先',
  },
  {
    value: TaskPriority.Second,
    color: '#00008B',
    label: '优先但不重要',
  },
  {
    value: TaskPriority.Third,
    color: '#0047AB',
    label: '重要但不优先',
  },
  {
    value: TaskPriority.Fourth,
    color: '#0096FF',
    label: '不重要不优先',
  },
])

const belongOptions = ref<SelectProps['options']>([
  {
    value: 1,
    color: '#B0AEC6',
    label: '家庭生活',
  },
  {
    value: 2,
    color: '#78A274',
    label: '我的书单',
  },
  {
    value: 3,
    color: '#A391B7',
    label: '学习成长',
  },
  {
    value: 4,
    color: '#B2BDBE',
    label: '身体健康',
  },
])

const taskItem = ref<taskItem>({
  taskName: '',
  taskDescription: '',
  taskDate: '',
  taskTime: '',
  taskPriority: TaskPriority.Top,
  isCircular: false,
  isMention: false,
  belongTo: 1,
})

const onRangeChange = (value: [Dayjs, Dayjs], dateString: [string, string]) => {
  console.log('Selected Time: ', value)
  console.log('Formatted Selected Time: ', dateString)
}

const onRangeOk = (value: [Dayjs, Dayjs]) => {
  console.log('onOk: ', value)
}
</script>
<style lang="scss" scoped>
:deep .ant-collapse-content-box {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 15px 25px !important;
}
:deep .ant-card-body {
  padding: 6px !important;
}
:deep .ant-collapse {
  background: transparent;
}
:deep .ant-select {
  width: 100% !important;
}
:deep .ant-select-selector {
  height: 42px !important;
  padding: 4px 13px !important;
}
.ant-drawer .ant-drawer-title {
  display: flex;
  justify-content: center;
  font-size: 18px;
}
.date-option {
  margin: 0 auto 20px;
}
.text-input {
  // border: 1px solid #d9d9d9;
  border-radius: 8px;
  .ant-card-body {
    padding: 10px !important;
  }
}
.task-input {
  border-color: transparent;
  border-bottom: 1px solid #f0f0f0;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.task-picker {
  margin-top: 12px;
  padding-left: 17px;
}
.ant-picker-dropdown .ant-picker-time-panel {
  display: none;
}
.color-selector {
  margin-left: 160px;
  border-radius: 10px;
}
.circle {
  width: 20px;
  height: 20px;
  border-radius: 50%;
}
.ant-select-dropdown {
  width: 150px !important;
  left: 220px !important;
}
.rc-virtual-list-holder-inner {
  flex-direction: row !important;
  flex-wrap: wrap;
}
.cycle-box {
  display: flex;
  margin-top: 16px;
  justify-content: space-between;
}
.time-box {
  width: 50%;
  margin: 0 auto;
}
.color-box {
  width: 10px;
  margin-right: 10px;
  border-radius: 3px;
}
</style>
