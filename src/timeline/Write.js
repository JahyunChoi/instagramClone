import React, { Component } from 'react';
import "./Write.css"
import { Link } from "react-router-dom"
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import IconButton from '@mui/material/IconButton';



class Write extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {

    return (
        <div className='write__page'>
          <div className='write__area'>           
             
                <div className="write__dragBox">
                  <IconButton><ControlPointIcon  className= "dragBox__icon" /></IconButton>
                  <p className = "dragBox__text">drag or choose your image to share</p>
              </div>                
           
          
            <div className="write__send">
              <input className = "write__input" type="text"/>
              <button className = "write__button">
              <Link to="/" className="Link">SEND</Link>
                </button>
            </div>
          </div>
        </div>
    );
  }
}

export default Write;


