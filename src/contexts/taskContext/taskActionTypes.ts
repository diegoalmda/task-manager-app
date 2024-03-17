import { ITask } from "./taskType";

export const ADD_TASK = 'ADD_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const CHECK_TASK_AS_DONE = 'CHECK_TASK_AS_DONE';
export const LOAD_STORAGE_TASKS = 'LOAD_STORAGE_TASKS';

export type TaskAction =
  | { type: typeof ADD_TASK; payload: ITask }
  | { type: typeof EDIT_TASK; payload: ITask }
  | { type: typeof REMOVE_TASK; payload: string }
  | { type: typeof CHECK_TASK_AS_DONE; payload: string }
  | { type: typeof LOAD_STORAGE_TASKS; payload: ITask[] };