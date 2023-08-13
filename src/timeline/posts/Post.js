import React from 'react'
import "./Post.css"
import { Avatar } from '@mui/material'
// import MoreHorizIcon from "@mui/icons-material/MoreHoriz"
import { FavoriteBorder } from '@mui/icons-material'
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import Write from "../Write"
import Reply from './replay/Reply';


function Post({user, postImage, likes, timestamp, replyNum}) {
  return (

    <div className='post'>
      {/* api연동X */}
      <div className="post__header">
        <div className="post__headerAuthor">
          <Avatar>{user.charAt(0).toUpperCase()}</Avatar>
          {user} •<span>just now</span>
        </div>
        {/* <MoreHorizIcon /> */}
        <div className="post__headerButtons">
          <button className="post__button">Edit</button>
          <button className="post__button">Delete</button>
        </div>
      </div>

      {/* api연동O */}

      <div className="post__image">
        <img src={postImage} alt="" />
      </div>
      <div className="post__footer">
        <div className="post__footerIcons">
          <div className="post__iconsMain">
            <FavoriteBorder className="postIcon" />
            <ChatBubbleOutlineIcon className="postIcon" />
            <TelegramIcon className="postIcon" />
          </div>
          <div className="post__bookmarkIcon">
            <BookmarkBorderIcon className="postIcon" />
          </div>
        </div>
        <div>
          <div className='post__like'>Liked by {likes} people.</div>
          <input className="reply__input" type="text" placeholder='댓글을 입력하세요' /> 
          <button className='reply_moreButton'>{replyNum}개의 댓글 더보기</button>
        </div>
      </div>
    </div>
  )
}

export default Post