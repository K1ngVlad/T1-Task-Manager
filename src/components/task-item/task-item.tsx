import { useState, type FC } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Chip,
  Divider,
  Grid,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from '@mui/material';

import type { TaskType } from '../../types';

import menuIcon from '../../assets/svg/menu.svg';
import editIcon from '../../assets/svg/edit.svg';
import deleteIcon from '../../assets/svg/delete.svg';
import { NavLink } from 'react-router-dom';
import { EDIT_PATH_TEMPLATE } from '../../constants';

import styles from './task-item.module.scss';

type ColorType =
  | 'success'
  | 'warning'
  | 'error'
  | 'primary'
  | 'secondary'
  | 'default'
  | 'info';

const priorityColors: Record<string, ColorType> = {
  low: 'success',
  medium: 'warning',
  high: 'error',
};

const priorityСircleColors: Record<string, string> = {
  low: '#2e7d32',
  medium: '#ed6c02',
  high: '#d32f2f',
};

const statusColors: Record<string, ColorType> = {
  todo: 'primary',
  'in-progress': 'warning',
  done: 'success',
};

export const TaskItem: FC<
  TaskType & { handleDeleteTask: (id: string) => void }
> = (props) => {
  const {
    id,
    title,
    description,
    status,
    category,
    priority,
    handleDeleteTask,
  } = props;

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
      <article
        className={styles.drag}
        ref={setNodeRef}
        {...attributes}
        {...listeners}
        style={style}
      >
        <Card
          sx={{
            minHeight: 50,
          }}
        >
          <CardContent
            sx={{
              height: '230px',
            }}
          >
            <Stack
              alignItems="flex-start"
              justifyContent="space-between"
              direction="row"
              spacing={1}
            >
              <Typography variant="h6" component="h3">
                {title}
              </Typography>
              <IconButton
                onPointerDown={(e) => e.stopPropagation()}
                onClick={handleClick}
              >
                <img
                  height={20}
                  width={20}
                  src={menuIcon}
                  alt="Open the action menu on the task"
                />
              </IconButton>
            </Stack>
            <Stack alignItems="center" direction="row" spacing={1}>
              <Box
                width={10}
                height={10}
                borderRadius="50%"
                bgcolor={priorityСircleColors[priority]}
                position="relative"
                bottom={1}
              ></Box>
              <Typography
                fontSize={18}
                fontWeight="bold"
                color={priorityColors[priority]}
              >
                Priority - {priority}
              </Typography>
            </Stack>
            <Divider component="hr" />
            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
              {description}
            </Typography>
          </CardContent>
          <CardActions>
            <Stack direction="row" spacing={1}>
              <Chip label={priority} color={priorityColors[priority]} />
              <Chip label={status} color={statusColors[status]} />
              <Chip label={category} />
            </Stack>
          </CardActions>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onPointerDown={(e) => e.stopPropagation()}
            onClose={handleClose}
            slotProps={{
              list: {
                'aria-labelledby': 'basic-button',
              },
            }}
          >
            <NavLink to={`${EDIT_PATH_TEMPLATE}${id}`}>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <img height={20} width={20} src={editIcon} alt="Edit task" />
                </ListItemIcon>
                <ListItemText>Edit</ListItemText>
              </MenuItem>
            </NavLink>
            <MenuItem
              onClick={() => {
                handleClose();
                handleDeleteTask(id);
              }}
            >
              <ListItemIcon>
                <img
                  height={20}
                  width={20}
                  src={deleteIcon}
                  alt="Delete task"
                />
              </ListItemIcon>
              <ListItemText>Delete</ListItemText>
            </MenuItem>
          </Menu>
        </Card>
      </article>
    </Grid>
  );
};
