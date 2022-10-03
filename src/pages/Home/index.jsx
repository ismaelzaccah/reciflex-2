import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css';
import * as React from 'react';
import { Box, Paper, TextField, Grid, FormControlLabel, Switch, Button, Divider, RadioGroup, Radio } from '@mui/material';
import ReciflexLogo from '../../components/ReciflexLogo';
import SignaturesRadio from '../../components/SignaturesRadio';
import { Stack } from '@mui/system';

const Home = () => {
  const signature1 = process.env.REACT_APP_SIGNATURE_1_OWNER;
  const signature2 = process.env.REACT_APP_SIGNATURE_2_OWNER;
  const signature3 = process.env.REACT_APP_SIGNATURE_3_OWNER;
  const signature4 = process.env.REACT_APP_SIGNATURE_4_OWNER;

  const [formValues, setFormValues] = React.useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
  }
  console.log(formValues);

  const [todayChecked, setTodayChecked] = React.useState(true);

  return (
    <Box
      className="flex column-center App"
      component="form"
      onSubmit={handleSubmit}
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
                name="clientName"
                label="Cliente"
                value={formValues.clientName || ""}
                onChange={handleChange}
                fullWidth
                required />
            </Grid>
            <Grid item xs={2}>
              <TextField
                id="receiptValue"
                name="receiptValue"
                label="Valor"
                value={formValues.receiptValue || ""}
                onChange={handleChange}
                fullWidth
                required />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="description"
                name="description"
                label="Referente a"
                value={formValues.description || ""}
                onChange={handleChange}
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
                  name="date"
                  value={formValues.date || ""}
                  onChange={handleChange}
                  label="Data"
                  InputLabelProps={{ shrink: true }}
                  disabled={todayChecked}
                />
                <FormControlLabel
                  control={
                    <Switch
                      id="today"
                      name="today"
                      checked={todayChecked}
                      onChange={event => setTodayChecked(event.target.checked)} />
                  } label="Usar data de Hoje" />
                <FormControlLabel
                  control={
                    <Switch id="includeCNPJ" name="includeCNPJ"
                      value={formValues.CNPJ || ""}
                      onChange={handleChange} />}
                  label="Incluir CNPJ"

                />
              </Stack>
            </Grid>
          </Grid>
          <Grid item xs={12} mt={2}>
            <Divider>Assinatura</Divider>
            <RadioGroup className='flex row-center'
              name="signature"
              row>
              <FormControlLabel
                value={1}
                onChange={handleChange}
                checked={formValues.signature === 1}
                control={<Radio />}
                label={signature1}
              />
              <FormControlLabel
                value={2}
                onChange={handleChange}
                checked={formValues.signature === 2}
                control={<Radio />}
                label={signature2}
              />
              <FormControlLabel
                value={3}
                onChange={handleChange}
                checked={formValues.signature === 3}
                control={<Radio />}
                label={signature3}
              />
              <FormControlLabel
                value={4}
                onChange={handleChange}
                checked={formValues.signature === 4}
                control={<Radio />}
                label={signature4}
              />
            </RadioGroup>
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