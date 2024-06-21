import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Skeleton,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import GroupIcon from "@mui/icons-material/Group";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import React from "react";

const Sidebar = () => {
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position={"fixed"}>
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              {loading ? (
                <Skeleton width={200} height={30} />
              ) : (
                <>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Homepage" />
                </>
              )}
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#pages">
              {loading ? (
                <Skeleton width={200} height={30} />
              ) : (
                <>
                  <ListItemIcon>
                    <ArticleIcon />
                  </ListItemIcon>
                  <ListItemText primary="Pages" />
                </>
              )}
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#groups">
              {loading ? (
                <Skeleton width={200} height={30} />
              ) : (
                <>
                  <ListItemIcon>
                    <GroupIcon />
                  </ListItemIcon>
                  <ListItemText primary="Groups" />
                </>
              )}
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#marketplace">
              {loading ? (
                <Skeleton width={200} height={30} />
              ) : (
                <>
                  <ListItemIcon>
                    <StorefrontIcon />
                  </ListItemIcon>
                  <ListItemText primary="Marketplace" />
                </>
              )}
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#friends">
              {loading ? (
                <Skeleton width={200} height={30} />
              ) : (
                <>
                  <ListItemIcon>
                    <PersonIcon />
                  </ListItemIcon>
                  <ListItemText primary="Friends" />
                </>
              )}
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#settings">
              {loading ? (
                <Skeleton width={200} height={30} />
              ) : (
                <>
                  <ListItemIcon>
                    <SettingsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Settings" />
                </>
              )}
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#profiles">
              {loading ? (
                <Skeleton width={200} height={30} />
              ) : (
                <>
                  <ListItemIcon>
                    <AccountBoxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Profiles" />
                </>
              )}
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
