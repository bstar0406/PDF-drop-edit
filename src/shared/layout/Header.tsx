import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

import Logo from '../../assets/images/logo.png'

const Header = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: '#f1f1ee' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            src={Logo}
            alt="logo"
            component="img"
            sx={{
              mr: 2,
              height:'50px',
              weight:'50px'
            }}
          ></Typography>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              color: 'black',
              textDecoration: 'none',
            }}
          >
            Fill Any PDF
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}></Box>

          <Box sx={{ flexGrow: 0 }}></Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Header
