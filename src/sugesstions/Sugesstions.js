import React from 'react';
import "./Suggestions.css";
import { Avatar } from '@mui/material';

function Sugesstions() {
  return <div className="suggestions">
    <div className="suggestions__title">Sugesstions for you</div>
    <div className="suggestions__usernames">


      <div className="suggestion__username">
        <div className="username__left">
          <span className="avatar">
            <Avatar>K</Avatar>
          </span>
          <div className="username__info">
            <span className="usename">kanginleeoficial</span>
            <span className="relation">New to Instagram</span>
          </div>
        </div>
        <button className="follow__button">Follow</button>
      </div>

      


      <div className="suggestion__username">
        <div className="username__left">
          <span className="avatar">
            <Avatar>H</Avatar>
          </span>
          <div className="username__info">
            <span className="usename">hm_son7</span>
            <span className="relation">New to Instagram</span>
          </div>
        </div>
        <button className="follow__button">Follow</button>
      </div>

      


      <div className="suggestion__username">
        <div className="username__left">
          <span className="avatar">
            <Avatar>R</Avatar>
          </span>
          <div className="username__info">
            <span className="usename">whrbtjd</span>
            <span className="relation">New to Instagram</span>
          </div>
        </div>
        <button className="follow__button">Follow</button>
      </div>

      


      <div className="suggestion__username">
        <div className="username__left">
          <span className="avatar">
            <Avatar>R</Avatar>
          </span>
          <div className="username__info">
            <span className="usename">charlieputh</span>
            <span className="relation">New to Instagram</span>
          </div>
        </div>
        <button className="follow__button">Follow</button>
      </div>

      


      <div className="suggestion__username">
        <div className="username__left">
          <span className="avatar">
            <Avatar>R</Avatar>
          </span>
          <div className="username__info">
            <span className="usename">billieeilish</span>
            <span className="relation">New to Instagram</span>
          </div>
        </div>
        <button className="follow__button">Follow</button>
      </div>

      


      <div className="suggestion__username">
        <div className="username__left">
          <span className="avatar">
            <Avatar>R</Avatar>
          </span>
          <div className="username__info">
            <span className="usename">___kim9987___</span>
            <span className="relation">New to Instagram</span>
          </div>
        </div>
        <button className="follow__button">Follow</button>
      </div>

      


      
    </div>
  </div>
}

export default Sugesstions