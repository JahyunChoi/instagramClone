import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Timeline from './timeline/Timeline';
import Write from './timeline/Write';
import Sugesstions from './sugesstions/Sugesstions';
import Sidenav from './navigation/Sidenav';

import { worker } from './mocks/worker';
// if (process.env.NODE_ENV === 'development') {
//   worker.start();
// }

function App() {
  return (
    <div className="app__">
      <BrowserRouter>
        <div className="nav__">
          <Sidenav />
        </div>
        <div className="timeline__">
          <Routes>
            <Route path="/" element={<Timeline />} />
            <Route path="/Write" element={<Write />} />
          </Routes>
        </div>
        <div className="sugesstions__">
          <Sugesstions />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
