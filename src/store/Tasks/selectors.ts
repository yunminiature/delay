import {RootState} from "../index";
import {Task} from "./types";

export const selectTasks = (state:RootState):Task[] => state.tasks.tasks