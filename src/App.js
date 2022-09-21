import logo from './assets/reciflex-logo.png';
import './App.css';
import * as React from 'react';
import { Box, Paper, TextField, CssBaseline, Typography, Link } from '@mui/material';

function App() {
  return (
    <CssBaseline>
      <Box className="App">
        <Box
          className="flex-column"
          component="form"
          sx={{
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
              width: 800,
              height: 600,
            },
          }}>
          <Paper elevation={8}>
            <Link
              className="flex-column"
              href="https://github.com/ismaelzaccah/reciflex"
              draggable="false"
              target="_blank"
              m={2}
              sx={{ textDecoration: 'none' }}
            >
              <Box sx={{ display: 'flex' }}>
                <img src={logo} alt="Reciflex 2 logo" width={300} draggable="false" />
                <Typography variant='subtitle1' sx={{ position: 'absolute', ml: 38 }}>2.0</Typography>
              </Box>
              <Typography variant='subtitle1'>Desenvolvido por Ismael Zaccah</Typography>
            </Link>

            <Box className="flex-column" m={2}>
              <TextField id="clientName" label="Cliente" fullWidth margin='normal'/>
              <TextField id="clientName" label="Cliente" fullWidth margin='normal'/>
              <TextField id="clientName" label="Cliente" fullWidth margin='normal' multiline rows={6} />
            </Box>
          </Paper>
        </Box>
      </Box>
    </CssBaseline>

  );
}

export default App;