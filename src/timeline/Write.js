import React, { Component } from 'react';
import "./Write.css"
import { Link } from "react-router-dom"
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close'; // 프리뷰 끄는 아이콘
import axios from 'axios';

class Write extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            preview: null,
            isDragging: false,
            position: { x: 0, y: 0 }
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
        } catch (error) {
            console.error("이미지 업로드 중 에러 발생:", error);
        }
    }

    handleMouseDown = (e) => {
        this.setState({
            isDragging: true,
            position: { x: e.clientX, y: e.clientY }
        });
    }

    handleMouseMove = (e) => {
        if (!this.state.isDragging) return;

        const dx = e.clientX - this.state.position.x;
        const dy = e.clientY - this.state.position.y;

        const img = e.target;

        img.style.left = `${img.offsetLeft + dx}px`;
        img.style.top = `${img.offsetTop + dy}px`;

        this.setState({ position: { x: e.clientX, y: e.clientY } });
    }

    handleMouseUp = () => {
        this.setState({ isDragging: false });
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

    render() {
        return (
            <div className='write__page'>
                <div className='write__area'>
                    <div className="write__dragBox">
                        <input
                            type="file"
                            accept="image/*"
                            style={{ display: 'none' }}
                            onChange={this.handleImageChange}
                            ref={fileInput => this.fileInput = fileInput}
                        />
                        <IconButton onClick={() => this.fileInput.click()}><ControlPointIcon className="dragBox__icon" /></IconButton>
                        {this.state.preview && 
                            <>
                                <img 
                                    src={this.state.preview} 
                                    alt="Image Preview" 
                                    style={{ width: '100px', height: '100px', position: 'absolute' }}
                                    onMouseDown={this.handleMouseDown}
                                    onMouseMove={this.handleMouseMove}
                                    onMouseUp={this.handleMouseUp}
                                    onMouseLeave={this.handleMouseUp}
                                />
                                <IconButton onClick={this.handleRemovePreview} style={{ position: 'absolute', top: '0', right: '0' }}><CloseIcon /></IconButton>
                            </>
                        }
                        <p className="dragBox__text">drag or choose your image to share</p>
                    </div>
                    <div className="write__send">
                        <input className="write__input" type="text" />
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
