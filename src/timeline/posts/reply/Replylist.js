// Replylist.js
import React from 'react';
import './Replylist.css';
import { useState } from 'react';
import { Article } from '@mui/icons-material';
import Reply from './Reply';

function Replylist({ replies, removeReply, addReply }) {
  const [toggle, setToggle] = useState(false);
  const [check, setCheck] = useState('');

  const handleDeleteClick = async (replyId) => {
    await removeReply(replyId);
    // removeReply(index); // 상위 컴포넌트의 removeReply 함수 호출
  };

  const handleReplyClick = (id) => {
    setCheck(id);
    setToggle(!toggle);
  };

  console.log(replies, 'replies');
  return (
    <div className="replyList">
      {replies.map((reply) => (
        <div className="reply__source" key={reply.id}>
          <artice>
            <div className="reply__contents">
              <div className="reply__content">
                <strong>{reply.userName}</strong> {/* 대댓글 작성자 이름 */}
                <p>{reply.content}</p> {/* 대댓글 내용 */}
                <button
                    className="reply__makeButton"
                      onClick={() => {
                      handleReplyClick(reply.id);                  
                      }}
                    >
                      대댓달기
                </button>
                <button
                        style={{ marginLeft: 'auto' }}
                        className="reply__delete"
                        onClick={() => handleDeleteClick(reply.id)}
                      >
                        x
                  </button> 

              </div>
                <div className="reply__Buttons">
                  
                               
                </div>
              
     
             
              {toggle && check === reply.id ? (
                <Reply
                  peedId={reply.id}
                  addReply={addReply}
                  type={'under'}
                  setToggle={setToggle}
                />
              ) : null}
            </div>
           

            <div>
              {reply.replies.map((reply) => (
                <div style={{ paddingLeft: 20 }}>
                  <strong>{reply.userName}</strong> {/* 작성자 이름 */}
                  <p>{reply.content}</p> {/* 댓글 내용 */}
                  <button
                    style={{ marginLeft: 'auto' }}
                    className="reply__delete"
                    onClick={() => handleDeleteClick(reply.id)}
                  >
                    x
                  </button>
                </div>
              ))}
            </div>
          </artice>
        </div>
      ))}
    </div>
  );
}

export default Replylist;
