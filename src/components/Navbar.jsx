import { AppBar, Box, Toolbar, Typography, styled, InputBase, Badge, Avatar, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import PetsIcon from "@mui/icons-material/Pets";
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';

const StyledToolbar = styled(Toolbar)({
  backgroundColor: "#DB2777",
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex"
  }
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none"
  }
}));

const Navbar = ({ handleLogout }) => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          LQ2T
        </Typography>
        <PetsIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={2} color="error">
            <NotificationsIcon />
          </Badge>
          <Avatar onClick={() => setOpen(true)} sx={{ width: 30, height: 30 }} src="https://tse2.mm.bing.net/th?id=OIP.5O5C_zwQiUlrHOQygjUPhwAAAA&pid=Api&P=0&h=220" />
        </Icons>
        <UserBox onClick={() => setOpen(true)}>
          <Avatar sx={{ width: 30, height: 30 }} src="https://tse2.mm.bing.net/th?id=OIP.5O5C_zwQiUlrHOQygjUPhwAAAA&pid=Api&P=0&h=220" />
          <Typography variant="span">Haru</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem onClick={() => handleLogout()}>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
