import type { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Button, Typography } from '@mui/material';

import { CREATE_PATH, MAIN_PATH } from '../../constants';

import s from './header.module.scss';

const Header: FC = () => {
  return (
    <AppBar
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }}
      className={s.header}
      position="fixed"
    >
      <NavLink to={MAIN_PATH}>
        <Typography
          color="white"
          variant="h4"
          component="h1"
          sx={{ flexGrow: 1, marginRight: 2 }}
        >
          Task Manager
        </Typography>
      </NavLink>

      <NavLink to={CREATE_PATH}>
        <Button variant="contained" color="info">
          Create task
        </Button>
      </NavLink>
    </AppBar>
  );
};

export { Header };
