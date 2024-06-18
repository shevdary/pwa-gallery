import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {useOfflineNotification} from "../../hooks/useOffline";
import {Alert} from "@mui/material";

const Banner = () => {
  const [isOnline] = useOfflineNotification();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Gallery
          </Typography>
        </Toolbar>
        {!isOnline ? <Alert variant="filled" severity="error">
          Offline
        </Alert> : <Alert variant="filled" severity="success">Online</Alert>}
      </AppBar>
    </Box>
  );
}

export default Banner;
