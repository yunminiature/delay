export const enum ActionTypes{
  ADD_PROJECT = "ADD_PROJECT",
  EDIT_PROJECT = "EDIT_PROJECT",
  DELETE_PROJECT = "DELETE_PROJECT"
}

export interface Project{
  id: number,
  title: string,
  sprints: Array<number>
}

export interface Projects{
  projects: Array<Project>
}