import { Box } from '@mui/system';
import { Link, Typography } from '@mui/material';
import logo from '../../assets/reciflex-logo.png';

const ReciflexLogo = () => {
  return (
    <Link
      className="flex column-center"
      href="https://github.com/ismaelzaccah/reciflex-2"
      underline='none'
      color='inherit'
      draggable="false"
      target="_blank"
      my={4}
      mx="auto"
      width={380}
    >
      <Box sx={{ display: 'flex' }}>
        <img src={logo} alt="Reciflex 2 logo" width={300} draggable="false" />
        <Typography variant='subtitle1' sx={{ position: 'absolute', ml: 38 }}>
          2.0
        </Typography>
      </Box>
      <Typography variant='subtitle1'>Desenvolvido por Ismael Zaccah</Typography>
    </Link>
  )
}

export default ReciflexLogo;