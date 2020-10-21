import React from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar, Toolbar, IconButton, Typography, Button,
} from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import * as ROUTES from '../../constants/routes';

const Navigation = () => (
  <AppBar position="static">
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
      <Typography variant="h6">Title</Typography>
      <Button color="inherit" component={Link} to={ROUTES.LOGIN}>
        Login
      </Button>
    </Toolbar>
  </AppBar>
);

export default Navigation;
