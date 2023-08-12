import React, { useState } from 'react';
import axios from 'axios';

function ImageUpload() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setPreview(reader.result);
      };

      reader.readAsDataURL(file);
      setImage(file); // 이미지를 상태에 저장
    } else {
      setPreview(null);
      setImage(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      console.error("이미지를 선택해주세요.");
      return;
    }

    const formData = new FormData();
    formData.append('image', image); // 서버에서 기대하는 필드명을 'image'로 가정

    try {
      // API 엔드포인트와 메서드는 실제 상황에 따라 변경될 수 있습니다.
      const response = await axios.post('https://your-api-endpoint/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log('업로드 성공:', response.data);
    } catch (error) {
      console.error("이미지 업로드 중 에러 발생:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {preview && <img src={preview} alt="Image Preview" style={{width: '100px', height: '100px'}} />}
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default ImageUpload;
