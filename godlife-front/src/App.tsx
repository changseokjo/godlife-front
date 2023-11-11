import { Outlet, Route, Router, Routes, useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import './App.css';
import Header from './layouts/Header';
import Main from './views/Main';
import Footer from './layouts/Footer';

function App() {

  //        state: 현재 페이지 url 상태       //
  const { pathname } = useLocation();

  //        state: 
  const [cursorStatus, setCursorStatus] = useState(false);

  return (
    <div>      
      <Header cursorStatus={cursorStatus} setCursorStatus={setCursorStatus} />
      <Main cursorStatus={cursorStatus} setCursorStatus={setCursorStatus}/>
      <Footer />
    </div>
  );
}

export default App;
