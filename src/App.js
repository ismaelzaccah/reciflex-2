import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import { Box, Paper, TextField, CssBaseline, Typography } from '@mui/material';

function App() {
  return (
    <Box className="App">
      <CssBaseline>
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
              width: 800,
              height: 600,
            },
          }}>
          <Paper elevation={8}>

            <Box sx={{ display: 'flex' }}>
              <Box sx={{ display: 'flex' }}>
                <img src={logo} alt="Reciflex 2 logo" width={200} />
                <Typography variant='subtitle1'>2.0</Typography>
              </Box>

              <Typography>Desenvolvido por Ismael Zaccah</Typography>
            </Box>

            <TextField fullWidth />
          </Paper>
        </Box>
      </CssBaseline>

    </Box>

  );
}

export default App;