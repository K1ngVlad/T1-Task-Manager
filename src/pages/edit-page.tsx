import type { FC, FormEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useTask } from '../hooks';
import { TaskDetails } from '../components';
import type { TaskType } from '../types';
import { MAIN_PATH } from '../constants';

const EditPage: FC = () => {
  const params = useParams();
  const navigate = useNavigate();

  if (!params.id) {
    return <>Страница не найдена</>;
  }

  const { task, setTask } = useTask(params.id);

  const onTaskSaveHandler = (
    event: FormEvent<HTMLFormElement>,
    updatedTask: TaskType
  ) => {
    event.preventDefault();
    setTask(updatedTask);
    navigate(MAIN_PATH);
  };

  return <TaskDetails task={task} onSubmitHandler={onTaskSaveHandler} />;
};

export { EditPage };
