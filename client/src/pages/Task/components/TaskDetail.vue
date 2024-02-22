<template>
  <div>
    <a-drawer
      :width="500"
      height="90%"
      placement="bottom"
      :open="props.openTaskCreator"
      @close="toggleTaskCreator"
    >
      <template #extra>
        <a-button type="link" @click="toggleTaskCreator">添加</a-button>
      </template>
    </a-drawer>
  </div>
</template>
