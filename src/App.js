import React, { useState } from "react";
import { Box, Snackbar, Stack, Alert } from '@mui/material';
import { Sidebar, Feed, Rightbar, Navbar, Add } from "./components";

function App() {
  const defaultPosts = [
    { desc: "Sản phẩm này thật là tuyệt vời!", image: "https://cf.shopee.vn/file/c5b879bc2cd827ecb36488e45527d62a" },
    { desc: "Tôi yêu cái này!", image: "https://i0.wp.com/bloganchoi.com/wp-content/uploads/2021/05/kem-duong-am-hada-labo-advanced-nourish-hyaluron-cream-1.jpg" }
  ];

  const [posts, setPosts] = useState(defaultPosts);
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  function addPosts(item) {
    setPosts(preValue => {
      return [...preValue, item];
    });
  }

  function deletePost(id) {
    setPosts(preValue => {
      return preValue.filter((item, index) => {
        return id !== index;
      });
    });
  }

  function editPost(postID, editedPost) {
    const updatedPosts = posts.map((post, index) => {
      if (postID === index) {
        return { ...post, ...editedPost };
      }
      return post;
    });
    setPosts(updatedPosts);
  }

  const showAlert = (message) => {
    setAlertMessage(message);
    setAlertOpen(true);
  };

  const handleAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAlertOpen(false);
  };

  return (
    <Box>
      <>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar />
          <Feed post={posts} delete={deletePost} edit={editPost} />
          <Rightbar post={posts} />
        </Stack>
        <Add add={addPosts} showAlert={showAlert} />
      </>
      <Snackbar open={alertOpen} autoHideDuration={3000} onClose={handleAlertClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert onClose={handleAlertClose} severity="success" sx={{ width: '100%' }}>
          {alertMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default App;
