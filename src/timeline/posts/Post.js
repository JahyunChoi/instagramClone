import React, { useState } from 'react'
import "./Post.css"
import { Avatar } from '@mui/material'
// import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import FavoriteIcon from '@mui/icons-material/Favorite';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import Reply from './reply/Reply';
import Replylist from './reply/Replylist';

function Post({ user, postImage, likes, hates, timestamp }) {

  const [replies, setReplies] = useState([
    // replies={replies}
  ]);
 
  
  const addReply = (newReply) => {
    setReplies((prevReplies) => [newReply, ...prevReplies]);
  }

  const removeReply = (index) => {
    setReplies((prevReplies) => {
      return prevReplies.filter((reply, i) => i !== index); // 선택한 댓글 제거
    });
  }

  return (
    <div className='post'>
      <div className="post__header">
        
        {/* api연동 */}
        <div className="post__headerAuthor">
          <Avatar>{user.charAt(0).toUpperCase()}</Avatar>
          {user} •<span>just now</span>
        </div>

        <div className="post__headerButtons">
          <button className="post__button">Edit</button>
          <button className="post__button">Delete</button>
        </div>
      </div>

      {/* api연동 */}
      <div className="post__image">
        <img src={postImage} alt="" />
      </div>

      <div className="post__footer">
        <div className="post__footerIcons">
          <div className="post__iconButtons">
            <button className="post__iconButton">
              <FavoriteIcon color="error" className="postIcon" />
            </button>

            {/* api연동 */}
            <div className='post__like'>Like "{likes}" </div>
            <button className="post__iconButton">
              <DoNotDisturbIcon className="postIcon" color="disabled" />
            </button>     
            {/* api연동 */}
            <div className='post__hate'>Don't like "{hates}" </div>
          </div>
          <div className="post__bookmarkIcon">
            {/* <BookmarkBorderIcon className="postIcon" /> */}
          </div>
        </div>
        <div>
          <div className='reply__area'>
          <Reply addReply={addReply} /> 

            <button className='reply_num'> {replies.length}개의 댓글</button>
            <Replylist 
            replies={replies}                     
            removeReply={removeReply} 
            /> 
            {/* removeReply 함수를 props로 전달 */}
           
          </div>
        </div>         
      </div>
    </div>
  )
}

export default Post;
