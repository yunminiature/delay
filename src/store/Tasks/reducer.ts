import {createReducer, PayloadAction} from "@reduxjs/toolkit";
import {Task, Tasks} from "./types";
import {addTask, deleteTask, editTask} from "./actions";

const initialState: Tasks = {
  tasks: [
    {
      id: 0,
      title: "Зарегистрироваться",
      description: "",
      storyPoints: 1,
      isCompleted: true,
      projectId: 0
    },
    {
      id: 1,
      title: "Добавить задачу на выполнение",
      description: "Для этого перенесите задачу в существующий спринт, или создайте новый",
      storyPoints: 2,
      isCompleted: false,
      projectId: 0
    },
    {
      id: 2,
      title: "Завершить спринт",
      description: "Это можно сделать со страницы проекта, или во вкладке Текущие спринты",
      storyPoints: 3,
      isCompleted: false,
      projectId: 0
    }
  ]
}

const tasksReducer = createReducer<Tasks>(initialState, {
  [addTask.type] : (state, action:PayloadAction<Task>) => {
    state.tasks = [...state.tasks, action.payload]
  },

  [editTask.type] : (state, action:PayloadAction<Task>) => {
    state.tasks = state.tasks.map(task =>
      task.id === action.payload.id
      ? action.payload
      : task
    )
  },

  [deleteTask.type] : (state, action:PayloadAction<number>) => {
    state.tasks = state.tasks.filter(task =>
      task.id !== action.payload
    )
  }
})

export default tasksReducer