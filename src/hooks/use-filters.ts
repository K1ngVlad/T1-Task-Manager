import { type Dispatch } from 'react';

import { type FiltersType } from './../types';
import { useStore } from './use-store';

export const useFilters = (): {
  filters: FiltersType;
  setFilters: Dispatch<React.SetStateAction<FiltersType>>;
} => {
  const { filters, setFilters } = useStore();

  return { filters, setFilters };
};
