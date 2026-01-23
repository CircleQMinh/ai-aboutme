import { Box, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { AppHeader } from '../components/AppHeader';
import { AppFooter } from '../components/AppFooter';

export function MainLayout() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <AppHeader />

      <Container sx={{ flex: 1, py: 3 }} maxWidth="lg">
        <Outlet />
      </Container>

      <AppFooter />
    </Box>
  );
}
