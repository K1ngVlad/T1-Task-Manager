import { useStore } from './use-store';

import type { TaskType } from '../types';

export const useTask = (
  id: string
): { task: TaskType; setTask: (updatedTask: TaskType) => void } => {
  const { store, setStore } = useStore();

  const taskIndex = store.findIndex((task) => task.id === id);

  if (taskIndex === -1) {
    throw new Error('Несуществующая задача');
  }

  const task = store[taskIndex];

  const setTask = (updatedTask: TaskType): void => {
    setStore((tasks) => {
      const newTasks = [...tasks];
      newTasks[taskIndex] = updatedTask;
      return newTasks;
    });
  };

  return { task, setTask };
};
