import React, {
  type ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import taskReducer from "./taskReducer";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { type ITask } from "./taskType";
import {
  addTask,
  checkTaskAsDone,
  editTask,
  loadTasks,
  removeTask,
} from "./taskActions";

interface TaskProviderProps {
  children: ReactNode;
}

interface ITaskContextData {
  tasks: ITask[];
  isLoadingTasks: boolean;
  addNewTask: (taskTitle: ITask["title"]) => void;
  toggleTaskDone: (taskId: ITask["id"]) => void;
  editTaskTitle: (taskd: ITask) => void;
  removeTaskById: (taskId: ITask["id"]) => void;
}

const tasksStorageKey = "@todolist-test-1.0.0:tasks";

const TaskContext = createContext({} as ITaskContextData);

function TaskProvider({ children }: TaskProviderProps): React.JSX.Element {
  const [taskState, dispatch] = useReducer(taskReducer, []);
  const [isLoadingTasks, setIsLoadingTasks] = useState<boolean>(true);

  function addNewTask(taskTitle: ITask["title"]): void {
    const timestamp = Date.now().toString(16);
    const randomId =
      timestamp + "-" + Math.floor(Math.random() * 1000000).toString(16);

    const newTask: ITask = {
      id: randomId,
      title: taskTitle,
      done: false,
    };
    dispatch(addTask(newTask));
  }

  function toggleTaskDone(taskId: ITask["id"]): void {
    dispatch(checkTaskAsDone(taskId));
  }

  function editTaskTitle(task: ITask): void {
    dispatch(editTask(task));
  }

  function removeTaskById(taskId: ITask["id"]): void {
    dispatch(removeTask(taskId));
  }

  useEffect(() => {
    async function loadTasksData(): Promise<void> {
      const tasksStored = await AsyncStorage.getItem(tasksStorageKey);

      if (tasksStored) {
        const tasksFound = JSON.parse(tasksStored) as ITask[];

        dispatch(loadTasks(tasksFound));
      }
      setIsLoadingTasks(false);
    }

    try {
      loadTasksData();
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    async function updateTasksInStorage(): Promise<void> {
      await AsyncStorage.setItem(tasksStorageKey, JSON.stringify(taskState));
    }

    try {
      updateTasksInStorage();
    } catch (err) {
      console.log(err);
    }
  }, [taskState]);

  return (
    <TaskContext.Provider
      value={{
        tasks: taskState,
        addNewTask,
        toggleTaskDone,
        editTaskTitle,
        removeTaskById,
        isLoadingTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

function useTaskContext(): ITaskContextData {
  const context = useContext(TaskContext);

  return context;
}

export { TaskProvider, useTaskContext };
