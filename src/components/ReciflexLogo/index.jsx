import { Box } from '@mui/system';
import { Link, Typography } from '@mui/material';
import logo from '../../assets/reciflex-logo.png';
import company from '../../config';

const ReciflexLogo = () => {
  return (
    <Link
      className="flex column-center"
      href="https://github.com/ismaelzaccah/reciflex-2"
      underline='none'
      color='inherit'
      draggable="false"
      target="_blank"
      my={2}
      mx="auto"
      width={380}
    >
      <Box sx={{ display: 'flex' }}>
        <img src={logo} alt="Reciflex 2 logo" width={200} draggable="false" />
        <Typography fontSize={12} sx={{ position: 'absolute', ml: 26 }}>
          {company.appVersion}
        </Typography>
      </Box>
      <Typography fontSize={14} variant='subtitle1'>Desenvolvido por Ismael Zaccah</Typography>
    </Link>
  )
}

export default ReciflexLogo;