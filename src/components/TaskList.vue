<template>
  <div id="item">
    <ul>
      <li v-for="task in taskList" :key="task.key">
        <span>{{ task.text }}</span>

        <div>
          <button :disabled="task.isDone" @click="done(task.key)">
            {{ task.isDone ? 'Concluído' : 'Concluir' }}
          </button>
          <button @click="remove(task.key)">Remover</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TaskItem',
  props: {
    taskList: {
      type: Array,
      required: true,
    },
    removeTask: {
      type: Function,
      required: true,
    },
    doneTask: {
      type: Function,
      required: true,
    },
  },
  methods: {
    remove(key) {
      this.removeTask(key);
    },
    done(key) {
      this.doneTask(key);
    },
  },
};
</script>

<style scoped>
#item {
  white-space: pre-wrap;
  word-wrap: break-word;
}

ul {
  list-style: none;
}

ul li {
  padding: 15px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

ul li:not(:first-child) {
  border-top: 1px solid #eee;
}

span {
  color: #0d2636;
}

button {
  cursor: pointer;
  background-color: #ddd;
  color: #000;
  border: 0;
  padding: 8px;
  border-radius: 4px;
}

button:focus {
  outline: none;
}

button:disabled {
  cursor: not-allowed;
  opacity: 0.4;
}

li div button:last-child {
  margin-left: 5px;
}
</style>
