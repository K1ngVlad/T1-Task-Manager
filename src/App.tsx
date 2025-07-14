import { type FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { routes } from './routes';
import { Header } from './components';
import { Container } from '@mui/material';

const App: FC = () => {
  return (
    <>
      <Header />
      <Container component="main" sx={{ pt: '100px', mb: 2, height: '100%' }}>
        <Routes>
          {routes.map((route) => (
            <Route {...route} />
          ))}
        </Routes>
      </Container>
    </>
  );
};

export { App };
