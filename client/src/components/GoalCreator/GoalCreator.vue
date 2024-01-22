<template>
  <div>
    <a-drawer
      :width="500"
      title="创建目标"
      height="800"
      placement="bottom"
      :open="props.open"
      @close="toggleDrawer"
    >
      <template #extra>
        <a-button type="link" @click="toggleDrawer">添加</a-button>
      </template>
      <a-space direction="vertical" size="large">
        <a-card class="text-input">
          <a-input
            v-model:value="goalItem.goalName"
            placeholder=" 目标名称"
            class="goal-input"
          >
            <template #prefix><smile-outlined /></template>
          </a-input>
          <a-textarea
            v-model:value="goalItem.goalDescription"
            placeholder=" 写一句激励自己的话吧～"
            :rows="4"
            :bordered="false"
          ></a-textarea>
        </a-card>
        <a-card>
          <CalendarOutlined />
          <span style="margin-left: 5px;">目标时间</span>
          <a-range-picker
            :show-time="{ format: 'YYYY-MM-DD' }"
            format="YYYY-MM-DD"
            :bordered="false"
            :placeholder="['起始时间', '结束时间']"
            class="goal-picker"
            @change="onRangeChange"
            @ok="onRangeOk"
          >
            <template #suffixIcon></template>
          </a-range-picker>
        </a-card>
        <a-card>
          <heart-two-tone two-tone-color="#eb2f96" />
          <span style="margin-left: 7px;">目标颜色</span>
          <a-select
            v-model:value="goalItem.goalColor"
            style="width: 10%;"
            placeholder=""
            :options="options"
            :showArrow="false"
            :bordered="false"
            option-label-prop="label"
            class="color-selector"
            :style="{ backgroundColor: goalItem.goalColor }"
          >
            <template #option="{ value: val}">
              <div class="circle" :style="{ backgroundColor: val }"></div>
            </template>
            <template #tagRender="{ value: val}">
              <a-tag :style="{ backgroundColor: val }"></a-tag>
            </template>
          </a-select>
        </a-card>
      </a-space>
    </a-drawer>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'
import { Dayjs } from 'dayjs'
import type { SelectProps } from 'ant-design-vue'
const confirmLoading = ref<boolean>(false)
const props = defineProps({
  open: Boolean,
})
const emit = defineEmits(['update:open'])

const toggleDrawer = () => {
  emit('update:open')
}
//
interface GoalItem {
  goalColor: string
  goalName: string
  goalDescription: string
  goalTime?: string[]
}
const goalItem = ref<GoalItem>({
  goalColor: '#B0AEC6',
  goalName: '',
  goalDescription: '',
})

const onRangeChange = (value: [Dayjs, Dayjs], dateString: [string, string]) => {
  console.log('Selected Time: ', value)
  console.log('Formatted Selected Time: ', dateString)
}

const onRangeOk = (value: [Dayjs, Dayjs]) => {
  console.log('onOk: ', value)
}

const options = ref<SelectProps['options']>([
  {
    value: '#B0AEC6',
    label: '',
  },
  {
    value: '#78A274',
    label: '',
  },
  {
    value: '#A391B7',
    label: '',
  },
  {
    value: '#C79FEA',
    label: '',
  },
  {
    value: '#C6D9F2',
    label: '',
  },
  {
    value: '#C4BBA0',
    label: '',
  },
  {
    value: '#EDB42C',
    label: '',
  },
  {
    value: '#607D8B',
    label: '',
  },
  {
    value: '#B0BEC5',
    label: '',
  },
  {
    value: '#F6F4F1',
    label: '',
  },
  {
    value: '#B2BDBE',
    label: '',
  },
  {
    value: '#B9F5B1',
    label: '',
  },
  {
    value: '#D4B6FA',
    label: '',
  },
  {
    value: '#D2B9D3',
    label: '',
  },
  {
    value: '#FFA07A',
    label: '',
  },
])

watch(goalItem.goalColor, (val) => {
  console.log(`selected:`, val)
})
</script>
<style lang="scss">
.ant-drawer .ant-drawer-title {
  display: flex;
  justify-content: center;
  font-size: 18px;
}
.text-input {
  // border: 1px solid #d9d9d9;
  border-radius: 8px;
  .ant-card-body {
    padding: 10px !important;
  }
}
.goal-input {
  border-color: transparent;
  border-bottom: 1px solid #f0f0f0;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.goal-picker {
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
</style>
