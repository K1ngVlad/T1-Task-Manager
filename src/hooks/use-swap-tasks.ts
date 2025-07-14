import type { Active, Over, UniqueIdentifier } from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';

import { useStore } from './use-store';

export const useSwapTasks = (): ((origPos: Active, newPos: Over) => void) => {
  const { store, setStore } = useStore();

  const getTaskPos = (id: UniqueIdentifier): number =>
    store.findIndex((task) => task.id === id);

  return (active: Active, over: Over): void => {
    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    const origPos = getTaskPos(activeId);
    const newPos = getTaskPos(overId);

    setStore((tasks) => arrayMove(tasks, origPos, newPos));
  };
};
