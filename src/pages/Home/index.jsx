import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css';
import * as React from 'react';
import { Box, Paper, TextField, Grid, FormControlLabel, Switch, Button, Divider } from '@mui/material';
import ReciflexLogo from '../../components/ReciflexLogo';
import SignaturesRadio from '../../components/SignaturesRadio';
import { Stack } from '@mui/system';

const Home = () => {
  const [todayChecked, setTodayChecked] = React.useState(true);

  const handleChange = (event) => {
    setTodayChecked(event.target.checked);
  };
  return (
    <Box
      className="flex column-center App"
      component="form"
      sx={{
        flexWrap: 'wrap',
        '& > :not(style)': {
          width: 800,
          height: 660,
        },
      }}>
      <Paper
        elevation={8}
        sx={{ justifyContent: 'center' }}>
        <ReciflexLogo />

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
            <Grid item xs={12}>
              <Stack direction="row" justifyContent="space-between">
                <TextField
                  type="date"
                  id="date"
                  label="Data"
                  InputLabelProps={{ shrink: true }}
                  disabled={todayChecked}
                />
                <FormControlLabel
                  control={
                    <Switch
                      id="today"
                      checked={todayChecked}
                      onChange={handleChange} />
                  } label="Usar data de Hoje" />
                <FormControlLabel
                  control={
                    <Switch id="includeCNPJ" />}
                  label="Incluir CNPJ"
                />
              </Stack>
            </Grid>
          </Grid>
          <Grid item xs={12} mt={2}>
            <Divider>Assinatura</Divider>
            <SignaturesRadio />
          </Grid>
          <Grid item xs={12} mt={4}>
            <Stack spacing={2} direction="row" justifyContent="center">
              <Button variant='contained' type='reset'>Limpar Campos</Button>
              <Button variant='contained' type='submit'>Gerar Recibo</Button>
            </Stack>
          </Grid>
        </Box>

      </Paper>
    </Box>

  );
}

export default Home;