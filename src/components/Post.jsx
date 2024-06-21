import React, { useState } from "react";
import { Avatar,Box,Card,CardActions,CardHeader,CardMedia,IconButton,Typography,CardContent,Checkbox,Button,ClickAwayListener, Grow, Paper, Popper, MenuItem,MenuList,styled,Modal, TextField,Stack,ButtonGroup, Menu,} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import TextsmsIcon from "@mui/icons-material/Textsms";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ImageIcon from "@mui/icons-material/Image";
import VideocamIcon from "@mui/icons-material/Videocam";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { FacebookShareButton, FacebookIcon, TwitterShareButton, LinkedinShareButton, TwitterIcon, LinkedinIcon } from "react-share";
import Comment from "./Comment"; 

const Post = (props) => {
  console.log(props.id)
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [post, setPost] = useState({
    id: props.id || "",
    desc: props.desc || "",
    image: props.image || "",
  });
  const [comments, setComments] = useState([]); 
  const [showComments, setShowComments] = useState(false); 
  const anchorRef = React.useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
    const imageUrl = URL.createObjectURL(file);
    setPost({
      ...post,
      image: imageUrl,
    });
  };

  const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
  });

  const handleTFChange = (e) => {
    const { name, value } = e.target;
    setPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };


  function checkDelete() {
    props.delete(props.id);
  }

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose1 = () => {
    setAnchorEl(null);
  };

  const open1 = Boolean(anchorEl);

  // Phan comment
  const addComment = (text) => {
    setComments([...comments, { text, replies: [] }]);
  };

  
  const editComment = (index, text) => {
    const updatedComments = comments.map((comment, i) =>
      i === index ? { ...comment, text } : comment
    );
    setComments(updatedComments);
  };

 
  const deleteComment = (index) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
  };

  
  const addReply = (index, text) => {
    const updatedComments = comments.map((comment, i) =>
      i === index ? { ...comment, replies: [...comment.replies, text] } : comment
    );
    setComments(updatedComments);
  };



  return (
    <div>
      <Card sx={{ margin: 5 }}>
        <CardHeader
          avatar={<Avatar alt="Raiden shogun" src="https://tse2.mm.bing.net/th?id=OIP.5O5C_zwQiUlrHOQygjUPhwAAAA&pid=Api&P=0&h=220" />}
          action={
            <>
              <IconButton onClick={handleToggle} ref={anchorRef}>
                <MoreVertIcon />
              </IconButton>
              <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === "bottom" ? "center top" : "center bottom",
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList
                          autoFocusItem={open}
                          id="composition-menu"
                          aria-labelledby="composition-button"
                        >
                          <MenuItem onClick={checkDelete}>Delete</MenuItem>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </>
          }
          title="Haru"
          subheader="September 14, 2023"
        />
        <CardMedia
          component="img"
          height="10%"
          image={props.image}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {props.desc}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteIcon />}
              checkedIcon={<FavoriteIcon sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="text" onClick={() => setShowComments(!showComments)}>
            <TextsmsIcon />
          </IconButton>
          <IconButton aria-label="share">
            <Button
              id="demo-positioned-button"
              aria-controls={open ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
             
            </Button>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={open1}
              onClose={handleClose1}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <MenuItem onClick={handleClose}>
                <FacebookShareButton
                    
                  quote={props.desc}
                  hashtag="#yourHashtagHere"
                  media={props.image}
                >
                  <FacebookIcon size={32} round />
                </FacebookShareButton>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <TwitterShareButton title={post.desc} hashtags="haru">
                  <TwitterIcon size={32} round />
                </TwitterShareButton>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <LinkedinShareButton url="http://google.com">
                  <LinkedinIcon size={32} round />
                </LinkedinShareButton>
              </MenuItem>
            </Menu>
          </IconButton>
        </CardActions>
        {showComments && (
          <Comment
            comments={comments}
            addComment={addComment}
            editComment={editComment}
            deleteComment={deleteComment}
            addReply={addReply}
          />
        )}
      </Card>
    </div>
  )}
export default Post;
