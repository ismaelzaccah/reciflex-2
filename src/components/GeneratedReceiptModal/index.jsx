import { Box, Typography } from "@mui/material"
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
  const props = {
    clientName: "Ismael Zaccah da Silva Vieira",
    receiptValue: "1123,58",
    description: "serviços graficos e etc",
    useTodayDate: true,
    date: "2022-10-12",
    includeCNPJ: true,
    signature: "3",
  }

  company.companyName = ""; //FIXME - remove after tests

  return (
    <Box sx={style}>
      <Stack
        spacing={2}
        direction='row'
        justifyContent='space-around'
      >
        <img
          src={companyLogo}
          alt={company.companyName}
          width={200}
          draggable={false}
        />
        <Stack
          spacing={2}
          direction='row'
          justifyContent='space-around'
        >
          <Typography>
            {company.companyName.toUpperCase() || "Nome da empresa não configurado"}
          </Typography>
          <Typography>
            {props.includeCNPJ && (company.cnpj || "CNPJ não configurado")}
            <br />
          </Typography>

        </Stack>
      </Stack>
    </Box>
  )
}

export default GeneratedReceiptModal;