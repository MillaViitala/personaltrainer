import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Trainings from './Trainings';
import Customerlist from './Customerlist';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
        <AppBar position="static">
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        color="default"
        onClick={handleClick}
      >
        Menu
      </Button>
      <Typography variant="h6" >
          Personal trainer
          </Typography>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
    
<li class="nav-item">
  <a class="nav-link" href="/trainings" style={{color: "white"}}>Trainings</a>
</li>
        </StyledMenuItem>
        <StyledMenuItem>
          <li class="nav-item">
  <a class="nav-link" style={{color: "black"}} href="/customerlist">Customers</a>
</li>
        </StyledMenuItem>
      </StyledMenu>
      </AppBar>
    </div>
  );
  }

