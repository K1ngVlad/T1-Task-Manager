import { useState, type FC, type FormEvent } from 'react';

import {
  Button,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

import { useNavigate } from 'react-router-dom';

import type { TaskType } from '../../types';
import { MAIN_PATH } from '../../constants';

import styles from './task-details.module.scss';

export const TaskDetails: FC<{
  task: TaskType | null;
  onSubmitHandler: (event: FormEvent<HTMLFormElement>, task: TaskType) => void;
}> = ({ task, onSubmitHandler }) => {
  const navigate = useNavigate();

  const [state, setState] = useState<TaskType>(
    task
      ? task
      : {
          id: '',
          title: '',
          description: '',
          category: 'Bug',
          status: 'todo',
          priority: 'low',
        }
  );

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const cancelChanges = () => {
    handleClose();
    navigate(MAIN_PATH);
  };

  return (
    <div className={styles.container}>
      <Card
        sx={{
          width: 400,
        }}
        onSubmit={(e) => onSubmitHandler(e, state)}
        component="form"
      >
        <CardContent>
          <Stack flexDirection="column" spacing={2}>
            <Typography variant="h5" component="h2">
              {task ? 'Edit task' : 'Create task'}
            </Typography>
            <TextField
              id="title"
              label="Title"
              variant="outlined"
              onChange={(e) =>
                setState((state) => ({ ...state, title: e.target.value }))
              }
              value={state.title}
            />
            <TextField
              id="description"
              label="Description"
              variant="outlined"
              multiline
              rows={4}
              onChange={(e) =>
                setState((state) => ({ ...state, description: e.target.value }))
              }
              value={state.description}
            />
            <FormControl>
              <InputLabel id="category">Category</InputLabel>
              <Select
                id="category"
                variant="outlined"
                label="Category"
                onChange={(e) =>
                  setState((state) => ({
                    ...state,
                    category: e.target.value,
                  }))
                }
                value={state.category}
              >
                <MenuItem value="Bug">Bug</MenuItem>
                <MenuItem value="Feature">Feature</MenuItem>
                <MenuItem value="Documentation">Documentation</MenuItem>
                <MenuItem value="Refactor">Refactor</MenuItem>
                <MenuItem value="Test">Test</MenuItem>
              </Select>
            </FormControl>
            <FormControl>
              <InputLabel id="status">Status</InputLabel>
              <Select
                id="status"
                variant="outlined"
                label="Status"
                onChange={(e) =>
                  setState((state) => ({ ...state, status: e.target.value }))
                }
                value={state.status}
              >
                <MenuItem value="todo">todo</MenuItem>
                <MenuItem value="in-progress">in-progress</MenuItem>
                <MenuItem value="done">done</MenuItem>
              </Select>
            </FormControl>
            <FormControl>
              <InputLabel id="priority">Priority</InputLabel>
              <Select
                id="priority"
                variant="outlined"
                label="Priority"
                onChange={(e) =>
                  setState((state) => ({ ...state, priority: e.target.value }))
                }
                value={state.priority}
              >
                <MenuItem value="low">low</MenuItem>
                <MenuItem value="medium">medium</MenuItem>
                <MenuItem value="high">high</MenuItem>
              </Select>
            </FormControl>
            <Stack direction="row" spacing={2}>
              <Button type="submit">{task ? 'Save' : 'Create'}</Button>
              <Button onClick={handleClickOpen} type="button">
                Cancel
              </Button>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Do you want to cancel the changes?</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            No
          </Button>
          <Button onClick={cancelChanges}>Yes</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
