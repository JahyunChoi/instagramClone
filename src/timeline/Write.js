import React, { Component } from 'react';
import "./Write.css"
import { Link } from "react-router-dom"
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close'; // 프리뷰 끄는 아이콘
import axios from 'axios';



//유저이름받는부분이랑 css 추가.

class Write extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      preview: null
    };
  }



  handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        this.setState({
          preview: reader.result
        });
      };

      reader.readAsDataURL(file);
      this.setState({ image: file });
    } else {
      this.setState({
        preview: null,
        image: null
      });
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    if (!this.state.image) {
      console.error("이미지를 선택해주세요.");
      return;
    }

    const formData = new FormData();
    formData.append('image', this.state.image);

    try {
      const response = await axios.post('https://your-api-endpoint/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log('업로드 성공:', response.data);

      // 새로운 포스트 추가
      const newPost = {
        user: "currentUser", // 현재 사용자 이름으로 수정
        poseImage: response.data.imageUrl, // 업로드된 이미지 URL
        likes: 0,
        timestamp: "just now"
      };

      // props로 전달받은 addPost 함수 호출
      this.props.addPost(newPost);

    } catch (error) {
      console.error("이미지 업로드 중 에러 발생:", error);
    }
  }

  handleRemovePreview = () => {
    this.setState({
      image: null,
      preview: null
    });
    if (this.fileInput) {
      this.fileInput.value = ""; // 첨부된 파일 초기화
    }
  }

  handleDragOver = (e) => {
    e.preventDefault();
  }

  handleDragEnter = (e) => {
    e.preventDefault();
  }

  handleDrop = (e) => {
    e.preventDefault();

    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();

      reader.onloadend = () => {
        this.setState({
          preview: reader.result
        });
      };

      reader.readAsDataURL(file);
      this.setState({ image: file });
    }
  }

  render() {
    return (
      <div className='makingFeed'>
        <div className='write__container'>

          <div
            className="photo__dragBox"
            //오버랑 엔터는 디폴트루가는데 왜? 드랍은함수가있고..
            onDragOver={this.handleDragOver}
            onDragEnter={this.handleDragEnter}
            onDrop={this.handleDrop}
          >
            <input
              className="photo__inputFile"
              type="file"
              accept="image/*"
              onChange={this.handleImageChange}
              ref={fileInput => this.fileInput = fileInput}
            />

            {/* 이미지가 첨부되지 않은 상태에서만 아이콘과 텍스트 표시 */}
            {!this.state.preview && (
              <>
                <IconButton onClick={() => this.fileInput.click()}>
                  <ControlPointIcon className="photo__dragBoxIcon" />
                </IconButton>
                <p className="dragBox__text">drag or choose your image to share</p>
              </>
            )}

            {this.state.preview &&
              <>
                <img
                  className='photo__dragBoxImage'
                  src={this.state.preview}
                />
                <IconButton className='photo__previewDeleteBtn' onClick={this.handleRemovePreview} ><CloseIcon /></IconButton>
              </>
            }

          </div>
          <div className="write__send">
            <div className="write__inputs">
              <input className="write__userName" type="text" placeholder='write your name' />
              <textarea className="write__textarea" type="text" placeholder='write something...'/>
            </div>            
            <button className="write__button" onClick={this.handleSubmit}>
              <Link to="/" className="Link">SEND</Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Write;
