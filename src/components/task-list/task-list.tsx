import { useState, type FC } from 'react';
import {
  closestCorners,
  DndContext,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from '@dnd-kit/core';
import { rectSortingStrategy, SortableContext } from '@dnd-kit/sortable';
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Grid,
  Snackbar,
} from '@mui/material';

import { useDeleteTask, useSwapTasks, useTasks } from '../../hooks';
import { TaskItem } from '../task-item';

export const TaskList: FC = () => {
  const tasks = useTasks();
  const swapTasks = useSwapTasks();
  const deleteTask = useDeleteTask();

  const [taskId, setTaskId] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);
  const [snakeOpen, setSnakeOpen] = useState(false);

  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      delay: 100,
      tolerance: 100,
      distance: 1000,
    },
  });
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 300,
      tolerance: 5,
    },
  });
  const keyboardSensor = useSensor(KeyboardSensor);

  const sensors = useSensors(mouseSensor, touchSensor, keyboardSensor);

  const onDragEndHandler = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;
    swapTasks(active, over);
  };

  const handleDeleteTask = (id: string) => {
    setTaskId(id);
    setOpen(true);
  };

  const handleApprovDeleteTask = () => {
    deleteTask(taskId);
    setOpen(false);
    setSnakeOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <DndContext
        sensors={sensors}
        onDragEnd={onDragEndHandler}
        collisionDetection={closestCorners}
      >
        <Grid component="section" container spacing={{ xs: 2, sm: 3, md: 4 }}>
          <SortableContext items={tasks} strategy={rectSortingStrategy}>
            {tasks.map((task) => {
              return (
                <TaskItem
                  key={task.id}
                  {...task}
                  handleDeleteTask={handleDeleteTask}
                />
              );
            })}
          </SortableContext>
        </Grid>
      </DndContext>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Do you want to delete the task?</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            No
          </Button>
          <Button onClick={handleApprovDeleteTask}>Yes</Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={snakeOpen}
        autoHideDuration={2000}
        onClose={() => setSnakeOpen(false)}
        message="Task deleted"
      />
    </>
  );
};
