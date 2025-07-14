import { useStore } from './use-store';
import type { TaskType } from '../types';

export const useTasks = (): TaskType[] => {
  const tasks = useStore().store;
  const filters = useStore().filters;

  return tasks.filter((task) => {
    if (filters.category !== 'All' && task.category !== filters.category) {
      return false;
    }

    if (filters.priority !== 'All' && task.priority !== filters.priority) {
      return false;
    }

    if (filters.status !== 'All' && task.status !== filters.status) {
      return false;
    }

    return true;
  });
};
