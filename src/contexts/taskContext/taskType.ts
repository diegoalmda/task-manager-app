export interface Task {
  id: string;
  title: string;
  done: boolean;
}

export type TaskAction =
  | { type: 'ADD_TASK'; payload: Task }
  | { type: 'EDIT_TASK'; payload: Task }
  | { type: 'REMOVE_TASK'; payload: string }
  | { type: 'CHECK_TASK_AS_DONE'; payload: string }
  | { type: 'LOAD_STORAGE_TASKS'; payload: Task[] };