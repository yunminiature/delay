import {Project, Projects} from "./types";
import {createReducer, PayloadAction} from "@reduxjs/toolkit";
import {addProject, deleteProject, editProject} from "./actions";

const initialState: Projects = {
  projects: [
    {
      id: 0,
      title: "I say раз-два, say раз-два-три"
    },
    {
      id: 1,
      title: "Но, ты не знала? Я из SPb"
    },
    {
      id: 2,
      title: "Эти реперы все похоже мини-мы"
    },
    {
      id: 3,
      title: "Все поменялось в наши дни, тяжело быть G"
    }
  ]
}

const projectsReducer = createReducer<Projects>(initialState, {
  [addProject.type] : (state, action:PayloadAction<Project>) => {
    state.projects = [...state.projects, action.payload]
  },

  [editProject.type] : (state, action:PayloadAction<Project>) => {
    state.projects = state.projects.map(project =>
      project.id === action.payload.id
        ? action.payload
        : project
    )
  },

  [deleteProject.type] : (state, action:PayloadAction<number>) => {
    state.projects = state.projects.filter(project =>
      project.id !== action.payload
    )
  }
})

export default projectsReducer