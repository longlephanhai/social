import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography, styled } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ImageIcon from "@mui/icons-material/Image";
import VideocamIcon from "@mui/icons-material/Videocam";
import React, { useState } from "react";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

const Add = (props) => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [post, setPost] = useState({
    desc: "",
    image: "",
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
    const imageUrl = URL.createObjectURL(file);
    setImageUrl(imageUrl);
    setPost((prevNote) => ({
      ...prevNote,
      image: imageUrl,
    }));
  };

  const handleTFChange = (e) => {
    const { name, value } = e.target;
    setPost((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  };

  const submitPost = (event) => {
    event.preventDefault();
    props.add(post);
    setImageUrl("");
    setPost({ desc: "", image: "" });
    setOpen(false);

    // Trigger alert
    props.showAlert("Post created successfully!");
  };

  return (
    <>
      <Tooltip
        onClick={() => setOpen(true)}
        title="Add"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            width: 500,
            height: 600,
            bgcolor: "background.default",
            color: "text.primary",
            p: 3,
            borderRadius: 5,
          }}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Create post
          </Typography>
          <UserBox>
            <Avatar
              alt="Raiden shogun"
              src="https://tse4.mm.bing.net/th?id=OIP.SrLpPcWDtHq5NGT1hoC5ZAHaHa&pid=Api&P=0&h=220"
            />
            <Typography fontWeight={500} variant="span">
              Haru
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%", mb: 3 }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's on your mind"
            variant="standard"
            onChange={handleTFChange}
            value={post.desc}
            name="desc"
          />
          {imageUrl && (
            <Box
              sx={{
                width: "70%",
                height: "50%",
                overflow: "hidden",
                borderRadius: 8,
                mt: 2,
                margin: "auto",
              }}
            >
              <img
                src={imageUrl}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          )}
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotionsIcon color="primary" />
            <ImageIcon
              color="secondary"
              onClick={() => document.getElementById("imageInput").click()}
              sx={{ cursor: "pointer" }}
            />
            <VideocamIcon color="success" />
            <PersonAddIcon color="error" />
          </Stack>
          <input
            type="file"
            id="imageInput"
            accept="image/*"
            style={{ display: "none" }}
            name="imageURL"
            onChange={handleImageChange}
          />
          <ButtonGroup
            variant="contained"
            aria-label="Basic button group"
            sx={{ mb: 2 }}
            fullWidth
          >
            <Button onClick={submitPost}>Post</Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
