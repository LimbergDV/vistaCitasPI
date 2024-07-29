import logo from '../images/WhatsApp Image 2024-06-12 at 06.38-Photoroom.jpg';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import HomeIcon from '@mui/icons-material/Home';
import { SlChemistry } from "react-icons/sl";
import { IoIosPerson } from "react-icons/io";
import { TfiWrite } from "react-icons/tfi";
import { IoPersonCircle } from "react-icons/io5";
import { GrLogin } from "react-icons/gr";
import { MdOutlineAttachMoney } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";

const pages = [
  { name: 'Inicio', icon: <HomeIcon />, path: '/' },
  { name: 'Servicios', icon: <SlChemistry />, path: '/catalogoR' },
  { name: 'Citas', icon: <TfiWrite />, path: '/consultaRecepcionista' },
  { name: 'Cotizar', icon: <MdOutlineAttachMoney />, path: '/cotizacionRecepcionista' },
  { name: 'Administrar Perfil', icon: <RiAdminFill />, path: '/administrarPerfilR' },
  { name: 'Salir', icon: <GrLogin />, path: '/loginR' }
];

const settings = ['Logout'];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (path) => {
    setAnchorElNav(null);
    if (path) {
      navigate(path);
    }
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ height: '90px', backgroundColor: '#20215a' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="img"
            src={logo}
            alt="logo"
            sx={{
              ml: 2,
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              height: 60,
            }}
          />

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={() => handleCloseNavMenu(null)}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={() => handleCloseNavMenu(page.path)}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 50, display: { xs: 'flex', md: 'none' }, justifyContent: 'center' }}>
            <Box
              component="img"
              src={logo}
              alt="logo"
              sx={{
                height: 40,
              }}
            />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', marginTop: '12px' }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => handleCloseNavMenu(page.path)}
                sx={{ my: 2, color: 'white', display: 'flex', alignItems: 'right', mx: 2 }}
                startIcon={page.icon}
              >
                {page.name}
              </Button>
            ))}
          </Box>

         
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
