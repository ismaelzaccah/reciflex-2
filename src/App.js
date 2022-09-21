import logo from './assets/reciflex-logo.png';
import './App.css';
import * as React from 'react';
import { Box, Paper, TextField, CssBaseline, Typography, Link, Grid } from '@mui/material';

function App() {
  return (
    <CssBaseline>
      <Box
        className="flex-column App"
        component="form"
        sx={{
          flexWrap: 'wrap',
          '& > :not(style)': {
            width: 800,
            height: 600,
          },
        }}>
        <Paper
          elevation={8}
          sx={{ justifyContent: 'center' }}>
          <Link
            className="flex-column"
            href="https://github.com/ismaelzaccah/reciflex"
            draggable="false"
            target="_blank"
            mt={2}
            mx="auto"
            width={380}
            sx={{ textDecoration: 'none' }}
          >
            <Box sx={{ display: 'flex' }}>
              <img src={logo} alt="Reciflex 2 logo" width={300} draggable="false" />
              <Typography variant='subtitle1' sx={{ position: 'absolute', ml: 38 }}>
                2.0
              </Typography>
            </Box>
            <Typography variant='subtitle1'>Desenvolvido por Ismael Zaccah</Typography>
          </Link>

          <Box m={2}>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <TextField id="clientName" label="Cliente" fullWidth margin='normal' />
              </Grid>
              <Grid item xs={4}>
                <TextField id="value" label="Valor" fullWidth margin='normal' />
              </Grid>
              <Grid item xs={12}>
                <TextField id="description" label="Referente a" fullWidth margin='normal' multiline rows={6} />
              </Grid>
            </Grid>
          </Box>

        </Paper>
      </Box>
    </CssBaseline>

  );
}

export default App;