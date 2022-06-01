import {createAction} from '@reduxjs/toolkit';
import {ActionTypes, Task} from "./types";

export const addTask = createAction<Task>(ActionTypes.ADD_TASK)

export const editTask = createAction<Task>(ActionTypes.EDIT_TASK)

export const deleteTask = createAction<number>(ActionTypes.DELETE_TASK)