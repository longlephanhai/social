import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
  Skeleton,
} from "@mui/material";
import React from "react";

const Rightbar = ({ post }) => {
  const latestPhotos = post.slice(-3).map((post) => post.image);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <Box flex={1} p={3} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position={"fixed"} width={300}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={6} mr={1}>
          <Avatar
            alt="Raiden shogun"
            src="https://images.ctfassets.net/hrltx12pl8hq/2vkpK6kuV4ax1Zj641bEMT/e911f7359a75e3088afd5e012fdc6f7f/3_portrait.webp"
          />
          <Avatar
            alt="Yae miko"
            src="https://up.yimg.com/ib/th?id=OIP.hhI8XIFtZMPd3wTUfRyrMQHaJ4&pid=Api&rs=1&c=1&qlt=95&w=81&h=108"
          />
          <Avatar
            alt="Ayaka"
            src="https://up.yimg.com/ib/th?id=OIP.J-TEMX3fcZRMP1PP4KqXjAHaKN&pid=Api&rs=1&c=1&qlt=95&w=78&h=108"
          />
          <Avatar
            alt="Ganyu"
            src="https://up.yimg.com/ib/th?id=OIP.iChHRwJAbL7cLHNgnwq1QwHaIS&pid=Api&rs=1&c=1&qlt=95&w=97&h=108"
          />
          <Avatar
            alt="Yelan"
            src="https://tse1.mm.bing.net/th?id=OIP.TGJNPbTUb7YH-LetbmO3igHaE5&pid=Api&P=0&h=220"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://tse1.mm.bing.net/th?id=OIP.LbPLAGIvynV8V8y2sVAvPQHaHa&pid=Api&P=0&h=220"
          />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          {latestPhotos.map((image, index) => (
            <ImageListItem key={index}>
              <img src={image} alt={`Latest photo ${index + 1}`} />
            </ImageListItem>
          ))}
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Conversation
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            {loading ? (
              <Skeleton height={110} width={250} />
            ) : (
              <>
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="https://tse1.mm.bing.net/th?id=OIP.TdFPimOr1rrm0g8dCsXXzAHaJP&pid=Api&P=0&h=220" />
                </ListItemAvatar>
                <ListItemText
                  primary="Brunch this weekend?"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        Ali Connors
                      </Typography>
                      {" — I'll be in your neighborhood doing errands this…"}
                    </React.Fragment>
                  }
                />
              </>
            )}
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            {loading ? (
              <Skeleton height={110} width={250} />
            ) : (
              <>
                <ListItemAvatar>
                  <Avatar
                    alt="Travis Howard"
                    src="https://tse3.explicit.bing.net/th?id=OIP.YLYmhFLucag2kgpAYxtX2wHaED&pid=Api&P=0&h=220"
                  />
                </ListItemAvatar>
                <ListItemText
                  primary="Summer BBQ"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        to Scott, Alex, Jennifer
                      </Typography>
                      {" — Wish I could come, but I'm out of town this…"}
                    </React.Fragment>
                  }
                />
              </>
            )}
            ;
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            {loading ? (
              <Skeleton height={110} width={250} />
            ) : (
              <>
                <ListItemAvatar>
                  <Avatar alt="Cindy Baker" src="https://tse1.explicit.bing.net/th?id=OIP.exe1cUe3yAN6p_2rBMI5nQHaJQ&pid=Api&P=0&h=220" />
                </ListItemAvatar>
                <ListItemText
                  primary="Oui Oui"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        Sandra Adams
                      </Typography>
                      {" — Do you have Paris recommendations? Have you ever…"}
                    </React.Fragment>
                  }
                />
              </>
            )}
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
