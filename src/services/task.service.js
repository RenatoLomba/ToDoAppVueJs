/* eslint-disable no-unused-vars */
import { Task } from "../models/Task";

class TaskService {
    /**
     * @param {Task[]} taskList 
     */
    saveTasks(taskList) {
        localStorage.setItem('@todo-app/taskList', JSON.stringify(taskList));
    }

    /**
     * @returns {Task[]}
     */
    getTasks() {
        return JSON.parse(localStorage.getItem('@todo-app/taskList')) || [];
    }
}

export const taskService = new TaskService();
