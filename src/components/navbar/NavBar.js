import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

import { useAuth } from '../../hooks/useAuth';
import './NavBar.scss';

export const NavBar = ({ pages, showProfile }) => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();
  const { user, logout } = useAuth(); // eslint-disable-line no-unused-vars

  const handleClick = (path) => {
    if (path) {
      navigate(path);
    }
  }

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  }

  const renderProfile = () => {
    if (showProfile) {
      return (
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Rad Warmbold" src="/static/images/cw.jpg" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem key="useMenu-profile" onClick={() => { 
              handleCloseUserMenu();
              navigate('profile');
            }}>
              <Typography textAlign="center">Profile</Typography>
            </MenuItem>
            <MenuItem key="useMenu-settings" onClick={() => { 
              handleCloseUserMenu();
              navigate('settings');
            }}>
              <Typography textAlign="center">Settings</Typography>
            </MenuItem>
            <MenuItem key="useMenu-logout" onClick={() => { logout() }}>
              <Typography textAlign="center">Log out</Typography>
            </MenuItem>
          </Menu>
        </Box>
      );
    } else {
      return (null);
    }
  }

  return (
    <AppBar className="AppBar" position="static">
      <Container>
        <Toolbar disableGutters>
          <AdbIcon />
          <Typography className="AppBar-Typography" component="a" href="/">ABSIDY HOLDINGS</Typography>
          <Box className="AppBar-Box">
            {pages.map((page) => {
              return (
                <Button className="AppBar-Button" key={`Button-${page.label}`} onClick={() => handleClick(page.path)}>{page.label}</Button>
              );
            })}
          </Box>
          {renderProfile()}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
