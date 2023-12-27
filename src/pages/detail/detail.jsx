import * as S from "./style";
import React, { useState } from "react";
import undo from "../assets/undo.svg";
import post from "../assets/z.png";
import PeoplePage from "../detail/People/people";
import ActivityPage from "./Activity/Activity";
import DeadlinePage from "./Deadline/Deadline";

const Detail = () => {
  const [isPeopleClicked, setIsPeopleClicked] = useState(false);
  const [isActivityClicked, setIsActivityClicked] = useState(false);
  const [isDeadlineClicked, setIsDeadlineClicked] = useState(false);

  const handlePeopleClick = () => {
    setIsPeopleClicked(!isPeopleClicked);
    setIsActivityClicked(false);
    setIsDeadlineClicked(false);
  };

  const handleActivityClick = () => {
    setIsActivityClicked(!isActivityClicked);
    setIsPeopleClicked(false);
    setIsDeadlineClicked(false);
  };

  const handleDeadlineClick = () => {
    setIsDeadlineClicked(!isDeadlineClicked);
    setIsPeopleClicked(false);
    setIsActivityClicked(false);
  };

  return (
    <>
      <S.DetailLayout>
        <S.UndoBox>
          <S.Undo src={undo} />
          돌아가기
        </S.UndoBox>
        <S.PostTitleBox>
          <S.PostImg src={post} />
          <S.PostContent>
            <S.Title>겨울은 독서의 계절 </S.Title>
            <S.Content>
              <p>같이 독서하실 분 구합니다~~ </p>
              <p>겨울은 독서의 계절이라고 누가 그랬어요 아마도</p>
              <p>독서에 관심이 없어도 환영 있으면 매우 환영</p>
              <p>함께 독서하고 교양을 쌓아봅시다 ㅎㅎㅎ</p>
            </S.Content>
            <S.JoinBtn>참여하기</S.JoinBtn>
          </S.PostContent>
        </S.PostTitleBox>
        <S.PostDetail>
          <S.People onClick={handlePeopleClick} isActive={isPeopleClicked}>
            인원
          </S.People>
          <S.Activity
            onClick={handleActivityClick}
            isActive={isActivityClicked}
          >
            활동
          </S.Activity>
          <S.Deadline
            onClick={handleDeadlineClick}
            isActive={isDeadlineClicked}
          >
            기한
          </S.Deadline>
        </S.PostDetail>
        <S.PostDetail>
          {isPeopleClicked && <PeoplePage />}
          {isActivityClicked && <ActivityPage />}
          {isDeadlineClicked && <DeadlinePage />}
        </S.PostDetail>
      </S.DetailLayout>
    </>
  );
};



export default Detail;
