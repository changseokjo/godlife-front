import React, { useState } from 'react'
import './style.css';
import { useLocation, useNavigate } from 'react-router-dom';

interface HeaderProps {
  cursorStatus: boolean;
  setCursorStatus: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({ cursorStatus, setCursorStatus }: HeaderProps) {

  //        state: path name 상태       //
  const { pathname } = useLocation();

  //        function: 네비게이트 함수       //
  const navigator = useNavigate();

  //        event handler: 로고 클릭 이벤트 처리        //
  const onLogoClickHandler = () => {
    navigator('/');
  }

  //        event handler: 스터디 검색 버튼 이벤트 처리        //
  const onStudySearchButtonClickHandler = () => {
    setCursorStatus(!cursorStatus);
  }

  //        render: 헤더 컴포넌트 렌더링        //
  return (
    <div id='header'>
      <div className='header-container' >
        <div className='header-left-box'>
          <div className='header-logo-icon-box'>
            <div className='logo-icon'></div>
          </div>
          <div className='header-logo-text' onClick={onLogoClickHandler}>{'갓생살기'}</div>
        </div>

        <div className='header-right-box'>
          <div className='study-search-button' onClick={onStudySearchButtonClickHandler}>{'스터디 검색'}</div>
          <div className='study-create-button'>{'스터디 생성'}</div>
          <div className='study-mypage-button'>{'내 정보 관리'}</div>
        </div>
      </div>
    </div>
  )
}
