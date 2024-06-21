import { Box } from '@mui/material'
import React from 'react'
import Post from './Post'

const Feed = (props) => {
  return (
    <Box flex={4} p={2} sx={{ display: { xs: "block", sm: "block" } }}>
      {props.post && props.post.map((item, index) => {
         console.log(item.desc)
        return (
          <Post
            key={index}
            id={index}
            desc={item.desc}
            image={item.image}
            delete={props.delete}
            edit={props.edit}
          />
        )
      })}
    </Box>
  )
}

export default Feed
