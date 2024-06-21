import React, { useState } from "react";
import { Avatar,Box,TextField,Button,Typography,List,ListItem,ListItemAvatar,ListItemText,Divider,IconButton,} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ReplyIcon from "@mui/icons-material/Reply";

const Comment = ({ comments, addComment, editComment, deleteComment, addReply }) => {
  const [comment, setComment] = useState("");
  const [reply, setReply] = useState("");
  const [editingIndex, setEditingIndex] = useState(-1);
  const [replyingIndex, setReplyingIndex] = useState(-1);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleReplyChange = (e) => {
    setReply(e.target.value);
  };

  const handleCommentSubmit = () => {
    if (comment.trim()) {
      addComment(comment);
      setComment("");
    }
  };

  const handleEditSubmit = (index) => {
    if (comment.trim()) {
      editComment(index, comment);
      setComment("");
      setEditingIndex(-1);
    }
  };

  const handleReplySubmit = (index) => {
    if (reply.trim()) {
      addReply(index, reply);
      setReply("");
      setReplyingIndex(-1);
    }
  };

  return (
    <Box>
      <Box display="flex" alignItems="center" mb={2}>
      <Avatar sx={{width:30, height:30}} src="https://up.yimg.com/ib/th?id=OIP.joFbJOzBSNNPLrM3b7yw3AHaGl&pid=Api&rs=1&c=1&qlt=95&w=138&h=122"/>
        <TextField
          sx={{ ml: 2, flex: 1 }}
          variant="outlined"
          size="small"
          placeholder="Write a comment..."
          value={comment}
          onChange={handleCommentChange}
        />
        <Button onClick={handleCommentSubmit} sx={{ ml: 2 }}>
          Post
        </Button>
      </Box>
      <List>
        {comments.map((cmt, index) => (
          <React.Fragment key={index}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
              <Avatar sx={{width:30, height:30}} src="https://up.yimg.com/ib/th?id=OIP.joFbJOzBSNNPLrM3b7yw3AHaGl&pid=Api&rs=1&c=1&qlt=95&w=138&h=122"/>
              </ListItemAvatar>
              <ListItemText
                primary="Haru"
                secondary={
                  <>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {cmt.text}
                    </Typography>
                    {cmt.replies && (
                      <List sx={{ }}>
                        {cmt.replies.map((reply, replyIndex) => (
                          <React.Fragment key={replyIndex}>
                            <ListItem alignItems="flex-start">
                              <ListItemAvatar>
                                <Avatar
                                  alt="User Avatar"
                                  src="https://via.placeholder.com/40"
                                />
                              </ListItemAvatar>
                              <ListItemText
                                primary="User Name"
                                secondary={
                                  <Typography
                                    sx={{ display: "inline" }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                  >
                                    {reply}
                                  </Typography>
                                }
                              />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                          </React.Fragment>
                        ))}
                      </List>
                    )}
                  </>
                }
              />
              <IconButton onClick={() => setEditingIndex(index)}>
                <EditIcon fontSize="small" />
              </IconButton>
              <IconButton onClick={() => deleteComment(index)}>
                <DeleteIcon fontSize="small" />
              </IconButton>
              <IconButton onClick={() => setReplyingIndex(index)}>
                <ReplyIcon fontSize="small" />
              </IconButton>
            </ListItem>
            {editingIndex === index && (
              <Box display="flex" alignItems="center" mb={2} ml={8}>
                <TextField
                  sx={{ ml: 2, flex: 1 }}
                  variant="outlined"
                  size="small"
                  placeholder="Edit your comment..."
                  value={comment}
                  onChange={handleCommentChange}
                />
                <Button onClick={() => handleEditSubmit(index)} sx={{ ml: 2 }}>
                  Save
                </Button>
              </Box>
            )}
            {replyingIndex === index && (
              <Box display="flex" alignItems="center" mb={2} ml={8}>
                <TextField
                  sx={{ ml: 2, flex: 1 }}
                  variant="outlined"
                  size="small"
                  placeholder="Write a reply..."
                  value={reply}
                  onChange={handleReplyChange}
                />
                <Button onClick={() => handleReplySubmit(index)} sx={{ ml: 2 }}>
                  Reply
                </Button>
              </Box>
            )}
            <Divider variant="inset" component="li" />
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default Comment;
