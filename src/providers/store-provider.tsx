import {
  createContext,
  useEffect,
  useState,
  type Dispatch,
  type FC,
  type ReactNode,
  type SetStateAction,
} from 'react';

import { mockTasks } from '../mock';
import type { FiltersType, TaskType } from '../types';

type StoreContextType = {
  store: Array<TaskType>;
  setStore: Dispatch<SetStateAction<Array<TaskType>>>;
  filters: FiltersType;
  setFilters: Dispatch<SetStateAction<FiltersType>>;
};

const StoreContext = createContext<StoreContextType>({
  store: [],
  setStore: () => {},
  filters: {
    priority: 'All',
    status: 'All',
    category: 'All',
  },
  setFilters: () => {},
});

const StoreProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const data = localStorage.getItem('store');

  console.log(data);

  const [store, setStore] = useState<Array<TaskType>>(
    data ? JSON.parse(data) : mockTasks
  );

  const [filters, setFilters] = useState<FiltersType>({
    priority: 'All',
    status: 'All',
    category: 'All',
  });

  useEffect(() => {
    localStorage.setItem('store', JSON.stringify(store));
  }, [store]);

  return (
    <StoreContext.Provider value={{ store, setStore, filters, setFilters }}>
      {children}
    </StoreContext.Provider>
  );
};

export { StoreProvider, StoreContext, type StoreContextType };
