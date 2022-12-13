import './index.css';
import * as React from 'react';
import { Box, Paper, TextField, Grid, FormControlLabel, Switch, Button, Divider, RadioGroup, Radio, Modal } from '@mui/material';
import { Stack } from '@mui/system';
import ReciflexLogo from '../../components/ReciflexLogo';
import company from '../../config';
import GeneratedReceipt from '../../components/GeneratedReceiptModal';

const Home = () => {

  const { signature } = company;

  const [formValues, setFormValues] = React.useState({
    clientName: "",
    receiptValue: "",
    description: "",
    useTodayDate: true,
    date: "",
    includeCNPJ: false,
    signature: "",
  });

  const [openGeneratedReceipt, setOpenGeneratedReceipt] = React.useState(false);
  const handleOpenGeneratedReceipt = () => setOpenGeneratedReceipt(true);
  const handleCloseGeneratedReceipt = () => setOpenGeneratedReceipt(false);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === 'checkbox') {
      setFormValues({ ...formValues, [name]: checked });
    } else {
      setFormValues({ ...formValues, [name]: value });
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    handleOpenGeneratedReceipt();
    console.log(formValues);
  }

  const hadleReset = (event) => {
    setFormValues({
      clientName: "",
      receiptValue: "",
      description: "",
      useTodayDate: true,
      date: "",
      includeCNPJ: false,
      signature: "",
    });
  }
  return (
    <Box
      className="flex column-center App"
      component="form"
      onSubmit={handleSubmit}
      onReset={hadleReset}
      sx={{
        flexWrap: 'wrap',
        '& > :not(style)': {
          width: 700,
        },
      }}>
      <Paper
        elevation={8}
        sx={{ justifyContent: 'center' }}>
        <ReciflexLogo/>

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
                rows={5} />
            </Grid>
            <Grid item xs={12}>
              <Stack direction="row" justifyContent="space-between">
                <TextField
                  type="date"
                  id="date"
                  name="date"
                  size="small"
                  value={formValues.date || ""}
                  onChange={handleChange}
                  label="Data"
                  InputLabelProps={{ shrink: true }}
                  disabled={formValues.useTodayDate === true}
                />
                <FormControlLabel
                  control={
                    <Switch
                      id="useTodayDate"
                      name="useTodayDate"
                      checked={formValues.useTodayDate}
                      onChange={handleChange}
                    />}
                  label="Usar data de Hoje" />
                <FormControlLabel
                  control={<Switch
                    name="includeCNPJ"
                    onChange={handleChange}
                    checked={formValues.includeCNPJ}
                  />}
                  label="Incluir CNPJ"
                />
              </Stack>
            </Grid>
          </Grid>
          <Grid item xs={12} mt={2}>
            <Divider>Assinatura</Divider>
            <RadioGroup
              className='flex row-center'
              id="signature"
              name="signature"
              value={formValues.signature}
              row>
              <FormControlLabel
                value={1}
                onChange={handleChange}
                control={<Radio />}
                label={signature[1]}
              />
              <FormControlLabel
                value={2}
                onChange={handleChange}
                control={<Radio />}
                label={signature[2]}
              />
              <FormControlLabel
                value={3}
                onChange={handleChange}
                control={<Radio />}
                label={signature[3]}
              />
              <FormControlLabel
                value={4}
                onChange={handleChange}
                control={<Radio />}
                label={signature[4]}
              />
            </RadioGroup>
          </Grid>
          <Grid item xs={12} m={2}>
            <Stack spacing={2} direction="row" justifyContent="center">
              <Button variant='contained' type='reset'>Limpar Campos</Button>
              <Button variant='contained' type='submit'>Gerar Recibo</Button>

              <Button //FIXME - Delete after make modal
                variant='contained'
                onClick={handleOpenGeneratedReceipt}
              >
                OPEN MODAL
              </Button>

            </Stack>
          </Grid>
        </Box>
      </Paper>

      <Modal
        open={openGeneratedReceipt}
        onClose={handleCloseGeneratedReceipt}
      >
        <Box>
          <GeneratedReceipt />
        </Box>
      </Modal>

    </Box>

  );
}

export default Home;