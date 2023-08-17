import React, { useState, useRef } from 'react';
import './Write.css';
import { useNavigate } from 'react-router-dom';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close'; // 프리뷰 끄는 아이콘
import { axiosInstance } from '../apis/instance';

function Write({ addPost }) {
  const [image, setImage] = useState();
  const [preview, setPreview] = useState(null);
  const [userName, setUserName] = useState('');
  const [postText, setPostText] = useState('');
  const fileInput = useRef(); // useRef를 사용하여 ref를 생성
  const navigate = useNavigate();

  const handleImageChange = (e) => {
  
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setPreview(reader.result);
      };

      reader.readAsDataURL(file);
      setImage(file);
    } else {
      setPreview(null);
      setImage(null);
    }
  };

//지금보낸게제이슨
//보내는 형식이 안맞아서 오류나는것같다
//유저이름, 
//500 서버에러
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submit button was clicked'); 

  const peedDTO = {
    userName : "test",
    content : "test"    
  }

  const config = {
    headers: {
      'Content-Type': 'multipart/form-data', // enctype 설정
    },
  };

  await axiosInstance.post('/peeds/peed', {
    peedDTO: peedDTO,
    image: image,
    
  }, config
  );




  try {
    const response = await apiInstance.post('/upload', formData, config);
    console.log('File uploaded successfully:', response.data);
  } catch (error) {
    console.error('Error uploading file:', error);
  }




    navigate('/');
  };

  const handleRemovePreview = () => {
    setImage(null);
    setPreview(null);
    if (fileInput.current) {
      fileInput.current.value = ''; // 첨부된 파일 초기화
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();

    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setPreview(reader.result);
      };

      reader.readAsDataURL(file);
      setImage(file);
    }
  };

  return (
    <div className="makingFeed">
      <div className="write__container">
        <div
          className="photo__dragBox"
          onDragOver={handleDragOver}
          onDragEnter={handleDragEnter}
          onDrop={handleDrop}
        >
          <input
            className="photo__inputFile"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            ref={fileInput} // fileInput이 useRef로 생성된 ref이므로, 이렇게 설정
          />

          {/* 이미지가 첨부되지 않은 상태에서만 아이콘과 텍스트 표시 */}
          {!preview && (
            <>
              {/* null방지 */}
              {/* <IconButton onClick={() => fileInput.current.click()}> */}
              <IconButton
                onClick={() => fileInput.current && fileInput.current.click()}
              >
                <ControlPointIcon className="photo__dragBoxIcon" />
              </IconButton>
              <p className="dragBox__text">
                drag or choose your image to share
              </p>
            </>
          )}

          {preview && (
            <>
              <img className="photo__dragBoxImage" src={preview} />
              <IconButton
                className="photo__previewDeleteBtn"
                onClick={handleRemovePreview}
              >
                <CloseIcon />
              </IconButton>
            </>
          )}
        </div>
        <div className="write__send">
          <div className="write__inputs">
            <input
              className="write__userName"
              type="text"
              placeholder="name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <textarea
              className="write__textarea"
              type="text"
              placeholder="write something..."
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
            />
          </div>
          <button className="write__button" onClick={handleSubmit}>
            SEND
          </button>
        </div>
      </div>
    </div>
  );
}

export default Write;
