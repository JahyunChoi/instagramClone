// Replylist.js
import React from 'react';
import "./Replylist.css";

function Replylist({ replies, removeReply }) { 

  const handleDeleteClick = (index) => {
    removeReply(index); // 상위 컴포넌트의 removeReply 함수 호출
  }

  return (
    <div className='replyList'>
      {replies.map((reply, index) => (
        <div className='reply__source' key={index}>
          <div className='reply__contents'>
            <strong>{reply.user}</strong> {/* 작성자 이름 */}
            <p>{reply.reply}</p> {/* 댓글 내용 */}
          </div>
          <button className='reply__delete' onClick={() => handleDeleteClick(index)}>x</button>
        </div>
      ))}
    </div>
  )
}

export default Replylist;
