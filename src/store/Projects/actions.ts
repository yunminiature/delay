import {createAction} from '@reduxjs/toolkit';
import {ActionTypes, Project} from "./types";

export const addProject = createAction<Project>(ActionTypes.ADD_PROJECT)

export const editProject = createAction<Project>(ActionTypes.EDIT_PROJECT)

export const deleteProject = createAction<number>(ActionTypes.DELETE_PROJECT)