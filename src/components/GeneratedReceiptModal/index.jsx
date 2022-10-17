import { Box, Link, Typography } from "@mui/material"
import { Stack } from "@mui/system";
import companyLogo from "../../assets/logo.png"
import company from "../../config";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const GeneratedReceiptModal = () => { //FIXME - Insert props
  const { companyName, cnpj, contact, adress, signature } = company;

  const props = {
    clientName: "Ismael Zaccah da Silva Vieira",
    receiptValue: "1123,58",
    description: "serviços graficos e etc",
    useTodayDate: true,
    date: "2022-10-12",
    includeCNPJ: true,
    signature: "3",
  }

  return (
    <Box sx={style}>

      <Typography
        variant="body2"
        textAlign='center'
      >
        Documento Gerado pelo Reciflex 2.0 - Desenvolvido por Ismael Zaccah
      </Typography>

      <Stack
        spacing={2}
        direction='row'
        justifyContent='space-around'
        my={4}
      >
        <img
          src={companyLogo}
          alt={company.companyName}
          width={200}
          draggable={false}
        />
        <Typography>
          {companyName.toUpperCase() || "Nome da empresa não configurado"}
          {" - "}
          {props.includeCNPJ && (cnpj || " - CNPJ não configurado")}
          <br />
          {contact[1] || "Contato 1 não configurado"}
          <br />
          {contact[2] || "Contato 2 não configurado"}
          <br />
          {adress.street || "Logradouro não configurado"}
          {" "}
          {adress.number || " - Numero não configurado"}
          {" "}
          {adress.complement}
          <br />
          {adress.district || "Bairro não configurado"}
          {" - "}
          {adress.city || "Cidade não configurada"}
          {" - "}
          {adress.acronym || "Cidade não configurada"}
        </Typography>

        <Typography
          fontSize={40}
          fontWeight={600}
        >
          R$ {props.receiptValue}
        </Typography>
      </Stack>

      <Typography>
        Recebemos de <b>{props.clientName}</b> a quantia de <b>{props.receiptValue}</b> referente a <b>{props.description}</b> pelo que firmamos o presente recibo.
      </Typography>

      <Stack
        spacing={2}
        direction='row'
        justifyContent='space-around'
        my={4}
      >
    
    {adress.city}, {props.date}
    {' - '}
    {signature[props.signature]}
      </Stack>

    </Box>
  )
}

export default GeneratedReceiptModal;