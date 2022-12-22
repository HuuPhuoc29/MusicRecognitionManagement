import './home.scss';
import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/navbar/Navbar';

import React, { useContext } from 'react';
// import { Navigate } from 'react-router-dom';

const Manager = () => {

  var body = <></>;
  var content = <></>;
  

    body = (
      <div className="home">
        {/* <FBChat /> */}
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          {content}
        </div>
      </div>
    );
  

  return <>{body}</>;
};

export default Manager;
