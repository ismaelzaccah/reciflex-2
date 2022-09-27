import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import logo from './assets/reciflex-logo.png';
import './App.css';
import * as React from 'react';
import { Box, Paper, TextField, CssBaseline, Typography, Link, Grid, FormControlLabel, Switch } from '@mui/material';

function App() {
  const [todayChecked, setTodayChecked] = React.useState(true);

  const handleChange = (event) => {
    setTodayChecked(event.target.checked);
  };

  return (
    <CssBaseline>
      <Box
        className="flex column-center App"
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
            className="flex column-center"
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
              <Grid item xs={10}>
                <TextField
                  id="clientName"
                  label="Cliente"
                  fullWidth
                  required />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  id="value"
                  label="Valor"
                  fullWidth
                  required />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="description"
                  label="Referente a"
                  fullWidth
                  required
                  multiline
                  rows={6} />
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
                  control={
                    <Switch
                      id="today"
                      checked={todayChecked}
                      onChange={handleChange}
                      inputProps={{ 'aria-label': 'controlled' }} />
                  } label="Usar data de Hoje" />
                <Grid item>
                  <TextField
                    type="date"
                    id="date"
                    label="Data"
                    InputLabelProps={{ shrink: true }}
                    disabled={todayChecked}
                  />
                </Grid>
              </Grid>
              <Grid item xs={8}>

              </Grid>
            </Grid>
          </Box>

        </Paper>
      </Box>
    </CssBaseline>

  );
}

export default App;