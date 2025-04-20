import React from 'react';

import { Container } from '@mui/material';

import LeftColumn from './components/LeftColumn';
import RightColumn from './components/RightColumn';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';


const App = () => {
  const title = 'CV';

  return (
    <Container>
      <Box>
        <h1>{title}</h1>

        <Grid container spacing={10}>
          <LeftColumn />
          <RightColumn />
        </Grid>

      </Box>
    </Container>
  )
}

export default App
