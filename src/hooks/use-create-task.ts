import { useStore } from './use-store';

import type { TaskType } from '../types';

export const useCreateTask = (): ((task: TaskType) => void) => {
  const { setStore } = useStore();

  return (task: TaskType): void => {
    setStore((tasks) => {
      const newTasks = [...tasks];
      newTasks.push(task);
      return newTasks;
    });
  };
};
