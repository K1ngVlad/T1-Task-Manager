import { useStore } from './use-store';

export const useDeleteTask = (): ((id: string) => void) => {
  const { store, setStore } = useStore();

  const getIndex = (id: string) => store.findIndex((task) => task.id === id);

  return (id: string): void => {
    setStore((tasks) => {
      const newTasks = [...tasks];
      const index = getIndex(id);
      newTasks.splice(index, 1);
      return newTasks;
    });
  };
};
