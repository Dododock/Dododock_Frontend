import * as S from "./style";
import React, { useEffect, useState } from "react";
import undo from "../assets/undo.svg";
import post from "../assets/z.png";
import PeoplePage from "../detail/People/people";
import ActivityPage from "./Activity/Activity";
import DeadlinePage from "./Deadline/Deadline";
import axiosInstance from "../util/axios";
import { useParams } from "react-router-dom";

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

  const { groupId } = useParams();

  const getDetail = async () => {
    try {
      const res = await axiosInstance.get(
        `http://10.150.150.214:8080/api/group/find/${groupId}`,
      );
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const [data, setData] = useState({});

  useEffect(() => {
    getDetail();
  }, []);

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
            <S.Title>{data.groupName}</S.Title>
            <S.Content>
              <p>{data.simpleDescription}</p>
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
