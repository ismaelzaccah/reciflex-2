import { Box, Typography } from "@mui/material"
import { Stack } from "@mui/system";
import * as React from "react";
import companyLogo from "../../assets/logo.png"
import company from "../../config";
import '../../utils/extenso'
import SignatureImage from "../SignatureImage";

const GeneratedReceiptModal = (props) => {
  const { companyName, cnpj, contact, adress, signature } = company;
 
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
      return <img src={SignatureImage(props.signature)} alt="Assinatura" width={170} />
    }
    return <Box width={170} height={70} />
  }

  return (
      <Box py={2} px={4}>
        <Typography
          variant="body2"
          textAlign='center'
          fontSize={8}
        >
          Documento Gerado pelo Reciflex 2.0 - Desenvolvido por Ismael Zaccah
        </Typography>

        <Stack
          direction='row'
          justifyContent='space-around'
          alignItems='center'
          my={4}
        >
          <img
            src={companyLogo}
            alt={company.companyName}
            width={150}
            draggable={false}
          />
          <Typography fontSize={12}>
            {companyName.toUpperCase() || "Nome da empresa não configurado"}
            {props.includeCNPJ && cnpj && " - "}
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
            fontSize={28}
            fontWeight="bold"
          >
            R$ {props.receiptValue}
          </Typography>
        </Stack>

        <Typography
          variant="h1"
          textAlign="center"
          fontWeight="bold"
          fontSize={28}
          my={2}
        >
          RECIBO
        </Typography>

        <Typography
          fontSize={18}
          textAlign={"justify"}
          sx={{ textIndent: 50 }}
        >
          Recebemos de <b>{props.clientName}</b> a quantia de <b>{props.receiptValue.extenso(true)}</b> referente a <b>{props.description}</b> pelo que firmamos o presente recibo.
        </Typography>

        <Stack
          spacing={2}
          direction='row'
          justifyContent='space-around'
          alignItems='baseline'
          textAlign="center"
        >
          <Typography fontSize={12}>
            {company.adress.city + ", " + dateInFull()}
          </Typography>

          <Box>
            {signatureSpace()}
            <Typography
              borderTop={1}
              width={200}
              fontSize={12}>
              {signature[props.signature] || "Assinatura"}
            </Typography>
          </Box>
        </Stack>
      </Box>
  )
}

export default GeneratedReceiptModal;