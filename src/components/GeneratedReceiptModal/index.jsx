import { Box, Typography } from "@mui/material"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
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

  return (
    <Box sx={style}>
      <Typography>
        {props.clientName}
      </Typography>
    </Box>
  )
}

export default GeneratedReceiptModal;