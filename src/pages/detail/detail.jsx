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
            <S.Title>겨울은 독서의 계절 </S.Title>
            <S.Content>
              <p>
                독서 동아리라고 할 수 있숩니다... 일주일에 두 번 정도 모여서
                같이 독서를 해보면 어떨까요 시험기간은 쫌 그렇죠? 셤 기간 피해서
                독서도 하고 얘기도 나누면 매우 좋지 않을까용. 독서를 좋아하든
                싫어하든 모두 환영입미다.
              </p>
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
