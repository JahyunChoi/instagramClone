import React from 'react'
import "./Homepage.css"
import Sidenav from "./navigation/Sidenav";
import Timeline from "./timeline/Timeline";
//추가 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Write from "./timeline/pages/Write";


function Homepage() {
  return (
    <div className='homepage'>
        <div className="homepage__nav">
        <Sidenav />
        </div>
        <div className="homepage__timeline">
        <Timeline />       
        </div>
    </div>
  )
}


// function Homepage() {
//   return (
//    <div className='homepage'>
//      <div className='write__way'>
//        <button className='write__button'>
//        Write
//        </button>
//      </div>
//      <div className='Homapage__middle'>
//        <div className="homepage__nav">
//          <Sidenav />
//        </div>
//        <div className="homepage__timeline">
//        <BrowserRouter>
//          <Routes>
//            <Route path='/' component={Timeline} exact />
//            {/* <Route path='/Write' component={Write} exact /> */}
//          </Routes>
//        </BrowserRouter>
//        </div>
//      </div>
//    </div>
//  )
// }



export default Homepage;