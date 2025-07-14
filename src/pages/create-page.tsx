import type { FC, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { useCreateTask } from '../hooks';
import { TaskDetails } from '../components';
import type { TaskType } from '../types';
import { MAIN_PATH } from '../constants';

const CreatePage: FC = () => {
  const createTask = useCreateTask();
  const navigate = useNavigate();

  const onTaskCreateHandler = (
    event: FormEvent<HTMLFormElement>,
    task: TaskType
  ) => {
    event.preventDefault();
    createTask(task);
    navigate(MAIN_PATH);
  };

  return <TaskDetails task={null} onSubmitHandler={onTaskCreateHandler} />;
};

export { CreatePage };
