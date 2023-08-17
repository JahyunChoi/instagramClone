import React, { useEffect, useState } from 'react';
import './Post.css';
import { Avatar } from '@mui/material';
// import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import Reply from './reply/Reply';
import Replylist from './reply/Replylist';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import { createReply, deleteReply, createUnderReply } from '../../apis/commets';

function Post({ peedId, user, postImage, likes, hates, comments, getPostAll }) {
 
  const [replies, setReplies] = useState(comments);
  console.log(comments, 'comments');

  const addReply = async (peedId, newReply, type) => {
    if (type === 'up') {
      console.log('addReply', peedId, newReply);
      const res = await createReply(peedId, newReply);
      console.log(res);
    } else if (type === 'under') {
      console.log('addUnderReply', peedId, newReply);
      const res = await createUnderReply(peedId, newReply);
      console.log(res);
    }
    getPostAll();
  };

  const removeReply = async (replyId) => {
    const res = await deleteReply(replyId);
    console.log(res);
    getPostAll();
  };

  return (
    <div className="post">
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
        {/* 이미지 임시 정적으로 가져오기 */}
        <img
          src={
            'https://images.unsplash.com/photo-1598294977926-babe20bba219?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
          }
          alt=""
        />
      </div>

      <div className="post__footer">
        <div className="post__Icons">
          <button className="post__iconButton">
            <FavoriteBorderIcon />
          </button>
          <button className="post__iconButton">
            <SentimentDissatisfiedIcon />
          </button> 
        </div>
        <div className='post__num'>
            <div>좋아요 {likes}개, </div>
            <div>글쎄요 {hates}개</div>
          </div>
        <div>         
          <div className="reply__area">           
            <button className="reply_num"> {comments.length}개의 댓글</button>
            <Replylist
              replies={comments}
              removeReply={removeReply}
              addReply={addReply}
            />
             <Reply peedId={peedId} addReply={addReply} type={'up'} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
