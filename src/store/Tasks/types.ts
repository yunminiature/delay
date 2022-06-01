export const enum ActionTypes{
  ADD_TASK = "ADD_TASK",
  EDIT_TASK = "EDIT_TASK",
  DELETE_TASK = "DELETE_TASK"
}

export interface Task{
  id: number,
  title: string,
  description: string,
  storyPoints: number,
  isCompleted: boolean,
  projectId: number
}

export interface Tasks{
  tasks: Array<Task>
}