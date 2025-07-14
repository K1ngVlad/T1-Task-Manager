import { useContext } from 'react';

import { StoreContext, type StoreContextType } from '../providers';

export const useStore = (): StoreContextType => useContext(StoreContext);
