import { Box, Link, Typography } from "@mui/material"
import { Stack } from "@mui/system";
import companyLogo from "../../assets/logo.png"
import company from "../../config";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: 400,
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

      <Link
        href="https://github.com/ismaelzaccah/reciflex-2"
        underline='none'
        color='inherit'
        draggable="false"
        target="_blank"
      >
        Gerado pelo Reciflex 2.0 - Desenvolvido por Ismael Zaccah
      </Link>
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
        <Stack
          spacing={2}
          direction='column'
          justifyContent='space-around'
        >
          <Typography>
            {companyName.toUpperCase() || "Nome da empresa não configurado"}
            <br />
            {props.includeCNPJ && (cnpj || "CNPJ não configurado")}
            <br />
            {contact[1] || "Contato 1 não configurado"}
            <br />
            {contact[2] || "Contato 2 não configurado"}
            <br />

          </Typography>

        </Stack>
      </Stack>
    </Box>
  )
}

export default GeneratedReceiptModal;