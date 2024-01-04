
<template>
  <div class="about">
    <h1>This is a User page</h1>
    <div>{{ id }}</div>
    <Button @click="add">add</Button>
    <Button @click="del">del</Button>
    <Button @click="toGoalPage">woaichenshuying</Button>
  </div>
</template>

<script setup>
  import { Button } from 'ant-design-vue';
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';

  const MODE = {
    add: 'ADD',
    delete: 'DELETE'
  }

const router = useRouter();

  const ButtonGroup = Button.Group;

  const id = ref(0);

  const printCurrentValue = () => {
    console.log(id.value);
  }

  const changeValue = (mode) => {
    switch (mode) {
        case MODE.add:  return () => {
            id.value ++;
        };   
        case MODE.delete: return () => {
            id.value --;
        };
    }
  }

  const add = changeValue(MODE.add);
  const del = changeValue(MODE.delete);

  const toGoalPage = () => {
      router.push('/goal')
  }

//   export default {
//     components: {
//       AButton: Button,
//       AButtonGroup: ButtonGroup,
//     },
//   };
</script>
