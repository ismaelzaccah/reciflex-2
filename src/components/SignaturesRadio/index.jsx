import { FormControlLabel, Radio, Stack } from "@mui/material";

const signaturesRadio = () => {
  const signature1 = process.env.REACT_APP_SIGNATURE_1_OWNER;
  const signature2 = process.env.REACT_APP_SIGNATURE_2_OWNER;
  const signature3 = process.env.REACT_APP_SIGNATURE_3_OWNER;
  const signature4 = process.env.REACT_APP_SIGNATURE_4_OWNER;

  return (
    <Stack direction="row" justifyContent="space-evenly">
      <FormControlLabel
        value="signature1"
        control={<Radio />}
        label={signature1}
      />
      <FormControlLabel
        value="signature2"
        control={<Radio />}
        label={signature2}
      />
      <FormControlLabel
        value="signature3"
        control={<Radio />}
        label={signature3}
      />
      <FormControlLabel
        value="signature4"
        control={<Radio />}
        label={signature4}
      />
    </Stack>
  )
}

export default signaturesRadio;