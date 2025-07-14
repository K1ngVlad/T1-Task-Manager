import type { FC } from 'react';

import { CreatePage, EditPage, MainPage } from './pages';
import { CREATE_PATH, EDIT_PATH, MAIN_PATH } from './constants';

export const routes: Array<{
  path: string;
  Component: FC;
}> = [
  {
    path: MAIN_PATH,
    Component: MainPage,
  },
  {
    path: CREATE_PATH,
    Component: CreatePage,
  },
  {
    path: EDIT_PATH,
    Component: EditPage,
  },
];
