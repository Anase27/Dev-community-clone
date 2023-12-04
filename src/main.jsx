import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter,Route,Routes } from 'react-router-dom';
import './index.css'
import HomePage from './homePage.jsx'
import CreatePost from './CreatePost.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/createpost' element={<CreatePost />} />
      </Routes>
    </BrowserRouter>
      {/* <div className="top-nav-outer-container">
        <Navbar />
      </div>
      <div className="main-page-outer-container">
        <div className="main-page-container">
          <div className="left-panel-container">
            <Leftmenu></Leftmenu>
          </div>
          <BlogsList />
          <Rightmenu />
        </div>
      </div> */}

  </React.StrictMode>
)
