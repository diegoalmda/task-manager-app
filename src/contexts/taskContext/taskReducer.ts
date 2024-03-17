import { ADD_TASK, EDIT_TASK, REMOVE_TASK, CHECK_TASK_AS_DONE, LOAD_STORAGE_TASKS, TaskAction } from './taskActionTypes';
import { ITask } from './taskType';

const taskReducer = (state: ITask[], action: TaskAction): ITask[] => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload as unknown as ITask];
    case EDIT_TASK:
      return state.map((task) =>
        task.id === action.payload.id ? { ...task, title: action.payload.title } : task
      );
    case REMOVE_TASK:
      return state.filter((task) => task.id !== action.payload);
    case CHECK_TASK_AS_DONE:
      return state.map((task) => {     
        return task.id === action.payload ? { ...task, done: !task.done } : task;
      });
    case LOAD_STORAGE_TASKS:
      return  action.payload as unknown as ITask[];
    default:
      return state;
  }
};

export default taskReducer;