import type { FC } from 'react';

import { TaskList } from '../components';
import { Filter } from '../components/filter';

const MainPage: FC = () => {
  return (
    <>
      <Filter />
      <TaskList />
    </>
  );
};

export { MainPage };
