import {RootState} from "../index";
import {Project} from "./types";

export const selectProjects = (state:RootState):Project[] => state.projects.projects