import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import ZoomInIcon from '@mui/icons-material/ZoomIn'
import ZoomOutIcon from '@mui/icons-material/ZoomOut'
import CloseIcon from '@mui/icons-material/Close'

import Logo from '../../assets/images/logo.png'

interface IPropsHeader {
  currentFile: any
}

const Header = (props: IPropsHeader) => {
  return (
    <AppBar position="static" sx={{ bgcolor: '#f1f1ee', height: '10vh' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ bgcolor: '#f1f1ee', height: '10vh' }}>
          <Typography
            src={Logo}
            alt="logo"
            component="img"
            sx={{
              mr: 2,
              height: '50px',
              weight: '50px',
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
            {props.currentFile ? props.currentFile.path : 'Fill Any PDF'}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}></Box>
          <Box sx={{ flexGrow: 0, display:props.currentFile? 'hidden':'' }}>
            <IconButton aria-label="up" size="medium" color="default">
              <ArrowUpwardIcon fontSize="inherit" />
            </IconButton>
            <IconButton
              aria-label="down"
              size="small"
              sx={{ color: '#000000' }}
            >
              12
            </IconButton>
            <IconButton
              aria-label="down"
              size="medium"
              sx={{ color: '#000000' }}
            >
              <ArrowDownwardIcon fontSize="inherit" />
            </IconButton>
            <IconButton
              aria-label="zoomout"
              size="medium"
              sx={{ color: '#000000' }}
            >
              <ZoomOutIcon fontSize="inherit" />
            </IconButton>
            <IconButton
              aria-label="pagenumber"
              size="small"
              sx={{ color: '#000000' }}
            >
              90%
            </IconButton>
            <IconButton
              aria-label="zoomin"
              size="medium"
              sx={{ color: '#000000' }}
            >
              <ZoomInIcon fontSize="inherit" />
            </IconButton>
            <Button variant="text">Save</Button>
            <IconButton
              aria-label="close"
              size="medium"
              sx={{ color: '#000000' }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Header
