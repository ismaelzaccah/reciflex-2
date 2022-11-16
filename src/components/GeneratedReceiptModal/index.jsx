import { Box, Button, Typography } from "@mui/material"
import { Stack } from "@mui/system";
import html2canvas from "html2canvas";
import * as React from "react";
import companyLogo from "../../assets/logo.png"
import company from "../../config";
import '../../utils/extenso'
import SignatureImage from "../SignatureImage";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  bgcolor: 'background.paper',
  boxShadow: 24,
  pb: 4,
};

const GeneratedReceiptModal = () => { //FIXME - Insert props
  const { companyName, cnpj, contact, adress, signature } = company;

  const props = {
    clientName: "Ismael Zaccah da Silva Vieira",
    receiptValue: "1123,58",
    description: "serviços graficos e etc",
    useTodayDate: true,
    date: "2022-5-30",
    includeCNPJ: true,
    signature: "1",
  }
  const dateInFull = () => {
    const monthInFull = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    if (props.useTodayDate) {
      const today = new Date();
      return `${today.getDate()} de ${monthInFull[today.getMonth()]} de ${today.getFullYear()}`;
    }
    let dateSplited = props.date.split("-");
    return `${dateSplited[2]} de ${monthInFull[--dateSplited[1]]} de ${dateSplited[0]}`;
  }

  const signatureSpace = () => {
    if (props.signature) {
      return <img src={SignatureImage(props.signature)} alt="Assinatura" width={250} />
    }
    return <Box width={250} height={70} />
  }

  const contentToScreenshot = React.useRef();

  const handleScreenshot = async () => {
    const element = contentToScreenshot.current;
    const canvas = await html2canvas(element, {scale: 2});
    const data = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    if (typeof link.download === 'string') {
      link.href = data;
      link.download = `Recibo de R$ ${props.receiptValue} para ${props.clientName}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  }

  return (
    <Box sx={style}>
      <Box p={4} ref={contentToScreenshot}>
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
          alignItems='center'
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
            variant="h1"
            component="h2"
            fontSize={40}
            fontWeight="bold"
          >
            R$ {props.receiptValue}
          </Typography>
        </Stack>

        <Typography
          variant="h1"
          textAlign="center"
          fontWeight="bold"
          fontSize={40}
          my={4}
        >
          RECIBO
        </Typography>

        <Typography
          fontSize={25}
          textAlign={"justify"}
          sx={{ textIndent: 40 }}
        >
          Recebemos de <b>{props.clientName}</b> a quantia de <b>{props.receiptValue.extenso(true)}</b> referente a <b>{props.description}</b> pelo que firmamos o presente recibo.
        </Typography>

        <Stack
          spacing={2}
          direction='row'
          justifyContent='space-around'
          alignItems='baseline'
          textAlign="center"
          mt={2}
        >
          <Typography>
            {company.adress.city + ", " + dateInFull()}
          </Typography>

          <Box>
            {signatureSpace()}
            <Typography
              borderTop={1}
              width={300}>
              {signature[props.signature] || "Assinatura"}
            </Typography>
          </Box>
        </Stack>
      </Box>
      <Stack
        spacing={2}
        direction='row'
        justifyContent='center'
      >
        <Button
          variant="contained"
          onClick={() => console.log("GERAR NOVO")}
        >
          Gerar Novo
        </Button>
        <Button
          variant="contained"
          onClick={() => console.log("IMPRIMIR")}
        >
          Imprimir
        </Button>
        <Button
          variant="contained"
          onClick={handleScreenshot}
        >
          Capturar
        </Button>

      </Stack>

    </Box>
  )
}

export default GeneratedReceiptModal;