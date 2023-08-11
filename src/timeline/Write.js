import React, { Component } from 'react';
import "./Write.css"
import { Link } from "react-router-dom"



class Write extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
        <div className='writ__epage'>
          <div className='write__area'>
            <input className="text__box" type="text"/>
            <button className="sand">
            <Link to="/">글쓰기완료</Link>
              </button>
          </div>
        </div>
    );
  }
}

export default Write;


// 사이드에붙고 작성페이지는 타임라인만 적용?쿨!