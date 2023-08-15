import React, { useState } from 'react'
import "./Reply.css"

function Reply({ addReply }) {  // addReply 함수를 props로 전달 받습니다.

  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  

  const handleSendClick = () => {
    if (name && content) {
      addReply({ user: name, reply: content });  // 입력된 이름과 내용을 상위 컴포넌트로 전달합니다.
      setName('');
      setContent('');
    }
  }

  return (
    <div className='reply'>
      <div className='reply__inputs'>
        <textarea
          className="reply__nameInput"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder='이름'
        />
        <div className="reply__commentInput"> 
          <textarea
          className="reply__input"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          type="text"
          placeholder='내용을 입력하세요'
  
          />          
          <button className='reply__endButton' onClick={handleSendClick}>SEND</button>
          
        </div>       
      </div>
    </div>
  )
}

export default Reply;
