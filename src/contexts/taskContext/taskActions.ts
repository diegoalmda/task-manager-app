import { ADD_TASK, EDIT_TASK, REMOVE_TASK, CHECK_TASK_AS_DONE, LOAD_STORAGE_TASKS, TaskAction } from './taskActionTypes';
import { ITask } from './taskType';

export const addTask = (task: ITask): TaskAction => ({
  type: ADD_TASK,
  payload: task,
});

export const editTask = (task: ITask): TaskAction => ({
  type: EDIT_TASK,
  payload: task,
});

export const loadTasks = (tasks: ITask[]): TaskAction => ({
  type: LOAD_STORAGE_TASKS,
  payload: tasks,
});

export const removeTask = (taskId: string): TaskAction => ({
  type: REMOVE_TASK,
  payload: taskId,
});

export const checkTaskAsDone = (taskId: string): TaskAction => ({
  type: CHECK_TASK_AS_DONE,
  payload: taskId,
});