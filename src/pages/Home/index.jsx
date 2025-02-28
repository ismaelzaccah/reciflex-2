import './index.css';
import * as React from 'react';
import { Box, Paper, TextField, Grid, FormControlLabel, Switch, Button, Divider, Snackbar, RadioGroup, Radio, Modal } from '@mui/material';
import { Stack } from '@mui/system';
import ReciflexLogo from '../../components/ReciflexLogo';
import company from '../../config';
import GeneratedReceipt from '../../components/GeneratedReceiptModal';
import html2canvas from 'html2canvas';
import { useReactToPrint } from 'react-to-print';


const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 780,
  bgcolor: 'background.paper',
  boxShadow: 24,
  pb: 2,
}

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
  }

  const handleReset = (event) => {
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

  const contentToPrintRef = React.useRef();

  const handleScreenshot = async () => {
    const element = contentToPrintRef.current;
    const canvas = await html2canvas(element, { scale: 2 });
    const data = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = data;
    link.download = `Recibo de R$ ${formValues.receiptValue} para ${formValues.clientName}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const handleClipboard = async () => {
    const element = contentToPrintRef.current;
    const canvas = await html2canvas(element, { scale: 2 });
    const data = canvas.toDataURL('image/png');
    const response = await fetch(data);
    const blob = await response.blob();
    await navigator.clipboard.write([
      new ClipboardItem({
        [blob.type]: blob
      })
    ]);
    return ("acordeon")
  }

  const handlePrint = useReactToPrint({
    content: () => contentToPrintRef.current,
  });

  const handleNewBlank = () => {
    handleCloseGeneratedReceipt();
    handleReset();
  }

  return (
    <Box
      className="flex column-center App"
      component="form"
      onSubmit={handleSubmit}
      onReset={handleReset}
      sx={{
        flexWrap: 'wrap',
        '& > :not(style)': {
          width: 700,
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
                  required
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
            </Stack>
          </Grid>
        </Box>
      </Paper>
      <Modal
        open={openGeneratedReceipt}
        onClose={handleCloseGeneratedReceipt}
      >
        <Box sx={modalStyle}>
          <Box ref={contentToPrintRef}>
            <GeneratedReceipt
              clientName={formValues.clientName}
              receiptValue={formValues.receiptValue}
              description={formValues.description}
              useTodayDate={formValues.useTodayDate}
              date={formValues.date}
              includeCNPJ={formValues.includeCNPJ}
              signature={formValues.signature}
            />
          </Box>
          <Stack
            spacing={2}
            direction='row'
            justifyContent='center'
            mt={2}
          >
            <Button
              variant="contained"
              onClick={handleNewBlank}
            >
              Gerar Novo
            </Button>
            <Button
              variant="contained"
              onClick={handlePrint}
            >
              Imprimir
            </Button>
            <Button
              variant="contained"
              onClick={handleScreenshot}
            >
              Salvar
            </Button>
            <Button
              variant="contained"
              onClick={handleClipboard}
            >
              Capturar
            </Button>
          </Stack>
        </Box>
      </Modal>
    </Box>
  );
}

export default Home;