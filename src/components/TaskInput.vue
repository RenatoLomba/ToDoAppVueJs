<template>
  <div id="task">
    <form @submit.prevent="addTask">
      <input type="text" placeholder="Tarefa de hoje?" v-model="task" />

      <button type="submit">Adicionar</button>
    </form>

    <TaskList
      :taskList="taskList"
      :removeTask="removeTask"
      :doneTask="doneTask"
    />

    <span v-show="pendingTasksList.length > 0">
      Você tem
      <strong :class="{ pend: pendingAreGreaterThanFive }">{{
        pendingTasksList.length
      }}</strong>
      tarefas pendentes
    </span>
  </div>
</template>

<script>
import TaskList from './TaskList.vue';
import { Task } from '../models/Task.js';
import { taskService } from '../services/task.service.js';

export default {
  name: 'TaskInput',
  components: {
    TaskList,
  },
  data() {
    return {
      task: '',

      /**
       * @type {Task[]}
       */
      taskList: [],
    };
  },
  created() {
    this.taskList = taskService.getTasks();
  },
  methods: {
    addTask() {
      if (!this.task) {
        alert('Digite uma tarefa');
        return;
      }

      this.taskList.push(
        new Task({
          text: this.task,
          key: String(Date.now()),
          isDone: false,
        }),
      );

      this.task = '';
    },
    removeTask(key) {
      this.taskList = this.taskList.filter((t) => t.key !== key);
    },
    doneTask(key) {
      for (let i = 0; i < this.taskList.length; i++) {
        const task = this.taskList[i];
        if (task.key === key) {
          task.isDone = true;
          this.taskList[i] = task;
          break;
        }
      }
    },
  },
  watch: {
    taskList: {
      deep: true,
      handler() {
        taskService.saveTasks(this.taskList);
      },
    },
  },
  computed: {
    pendingTasksList() {
      return this.taskList.filter((t) => !t.isDone);
    },
    pendingAreGreaterThanFive() {
      return this.pendingTasksList.length >= 5;
    },
  },
};
</script>

<style scoped>
#task {
  max-width: 700px;
  background-color: #fff;
  border-radius: 4px;
  padding: 20px;
  margin: 20px auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
}

form {
  margin: 30px 0;
  display: flex;
  flex-direction: row;
}

form button {
  cursor: pointer;
  background-color: #0f5959;
  border: 0;
  border-radius: 4px;
  margin-left: 10px;
  padding: 4px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}

input {
  flex: 1;
  border: 1px solid #eee;
  padding: 6px 10px;
  border-radius: 4px;
  font-size: 14px;
}

input:focus {
  outline: none;
}

strong.pend {
  color: crimson;
}
</style>
