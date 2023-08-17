import React, { useState } from 'react';
import './Reply.css';

function Reply({ peedId, addReply, type, setToggle }) {
  // addReply 함수를 props로 전달 받습니다.

  const [name, setName] = useState('');
  const [content, setContent] = useState('');

  const handleSendClick = () => {
    if (name && content) {
      addReply(peedId, { userName: name, content: content }, type); // 입력된 이름과 내용을 상위 컴포넌트로 전달합니다.
      setName('');
      setContent('');
    }
    type === 'under' && setToggle((pre) => !pre);
  };

  return (
    <div className="reply">
      <div className="reply__inputs">
        <textarea
          className="reply__nameInput"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="이름"
        />
        <textarea
          className="reply__commentInput"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          type="text"
          placeholder="내용을 입력하세요"
        />
      </div>
        <button className="reply__endButton" onClick={handleSendClick}>
          SEND
        </button>     
    </div>
  );
}

export default Reply;
