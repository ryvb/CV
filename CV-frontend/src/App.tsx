import { Container } from '@mui/material';

import Header from './components/Header';
import LeftColumn from './components/LeftColumn';
import RightColumn from './components/RightColumn';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';


const App = () => {

  return (
    <Box sx={{
      display: 'flex',
      position: "fixed",
      overflow: 'auto',
      width: '100%',
      height: "100%"}}>
      <Container>
        <Box>
          <Stack spacing={2}>
            <Header />
            <Grid container spacing={10}>
              <LeftColumn />
              <RightColumn />
            </Grid>
          </Stack>

        </Box>
      </Container>
    </Box>
  )
}

export default App
