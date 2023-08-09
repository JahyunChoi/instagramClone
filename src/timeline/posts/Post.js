import React from 'react'
import "./Post.css"
import { Avatar } from '@mui/material'
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"
import { FavoriteBorder } from '@mui/icons-material'
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

function Post({user, postImage, likes, timestamp}) {
  return (
    <div className='post'>
      <div className="post__header">
        <div className="post__headerAuthor">
          <Avatar>R</Avatar>
          hello_ •<span>12h</span>
        </div>
        <MoreHorizIcon />
      </div>

      <div className="post__image">
        <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />
      </div>
      <div className="post__footer">
        <div className="post__footerIcons">
          <div className="post__iconsMain">
            <FavoriteBorder className="postIcon" />
            <ChatBubbleOutlineIcon className="postIcon" />
            <TelegramIcon className="postIcon" />
           
          </div>
          <div className="post__iconsSave">
            <BookmarkBorderIcon className="postIcon" />
          </div>
        </div>
        Liked by 21 people.
      </div>
    </div>
  )
}

export default Post