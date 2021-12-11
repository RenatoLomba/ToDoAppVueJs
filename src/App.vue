<template>
  <header>Minhas tarefas</header>

  <TaskInput />
</template>

<script>
import TaskInput from './components/TaskInput.vue';
export default {
  name: 'App',
  components: {
    TaskInput,
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  font-size: 40px;
  color: #fff;
}
</style>
