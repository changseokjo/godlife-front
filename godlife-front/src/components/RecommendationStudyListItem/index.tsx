import React from "react";
import './style.css';
import { RecommendationStudyRoomItem } from "../../types";
import DefaultStudyCoverImage from "../../assets/study-default-icon.png";
import { useNavigate } from "react-router-dom";
import { STUDYROOM_DETAIL_PATH } from "../../constant";

//              interface: 추천 스터디 Top5 리스트 아이템 컴포넌트 Props               //
interface Props {
    recommendationStudyRoomItem: RecommendationStudyRoomItem;
}

//              component: 추천 스터디 Top5 리스트 아이템 컴포넌트             //
export default function RecommendationStudyListItem({ recommendationStudyRoomItem }: Props) {

    //              state: Properties               //
    const { studyNumber, studyName, studyEndDate, studyPersonnel, studyCoverImageUrl } = recommendationStudyRoomItem;

    //              function: 네비게이트 함수               //
    const navigator = useNavigate();

    //        event handler: 추천 스터디 클릭 이벤트 처리 함수       //
    const onRecommendationStudyClickHandler = () => {
        navigator(STUDYROOM_DETAIL_PATH(studyNumber));
    }

    //              render: 추천 스터디 Top5 리스트 아이템 컴포넌트 렌더링             //
    return (
        <div className='main-middle-box-studyroom-data' onClick={onRecommendationStudyClickHandler}>
            <div className='main-middle-box-studyroom-deadline-time'>{`스터디 마감 시간 : ${studyEndDate}`}</div>
            <div className='main-middle-box-studyroom-picture-box'>
              <div className='main-middle-box-studyroom-picture' style={{backgroundImage: `url(${studyCoverImageUrl ? studyCoverImageUrl : DefaultStudyCoverImage})` }}></div>
            </div>
            <div className='main-middle-box-studyroom-participation-number'>{`스터디 참여자 수 : ${studyPersonnel}명`}</div>
            <div className='main-middle-box-studyroom-title'>{studyName}</div>
        </div>
    );
}