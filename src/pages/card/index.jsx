import React, { useState, useEffect } from "react";
import * as S from "./index";

const tempData = [
  {
    id: 1,
    groupName: "그룹 이름입니다",
    due: "2023-12-27",
    currentMemberCount: 5,
    memberCount: 2,
  },
  {
    id: 2,
    groupName: "그룹 이름입니다",
    due: "2023-12-27",
    currentMemberCount: 5,
    memberCount: 1,
  },
  {
    id: 3,
    groupName: "그룹 이름입니다",
    due: "2023-12-27",
    currentMemberCount: 5,
    memberCount: 0,
  },
  {
    id: 4,
    groupName: "그룹 이름입니다",
    due: "2023-12-27",
    currentMemberCount: 5,
    memberCount: 2,
  },
  {
    id: 5,
    groupName: "그룹 이름입니다",
    due: "2023-12-27",
    currentMemberCount: 5,
    memberCount: 1,
  },
  {
    id: 6,
    groupName: "그룹 이름입니다",
    due: "2023-12-27",
    currentMemberCount: 5,
    memberCount: 0,
  },
];

const formatDueDate = (dateStr) => {
  const [year, month, day] = new Date(dateStr)
    .toISOString()
    .split("T")[0]
    .split("-");
  return `${month}월 ${day}일`;
};

const Card = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(tempData);
  }, []);

  const navigate = (id) => {
    console.log(`Go to post/${id}`);
  };

  return (
    <S.CardBox>
      {data.map((data, id) => {
        return (
          <S.BoxDiv onClick={() => navigate(data.id)}>
            <S.DeadlineDiv>{formatDueDate(data.due)}</S.DeadlineDiv>
            <S.DododokDiv>{data.groupName}</S.DododokDiv>
            <S.ImageContainer>
              <img
                height={141}
                width={346}
                src="https://via.placeholder.com/150"
                alt="thumbnail"
              />
            </S.ImageContainer>
            <S.BoardDiv>
              <h1>{data.groupName}</h1>
              <hr />
            </S.BoardDiv>
            <S.ProfileDiv>
              <img src="https://via.placeholder.com/28" alt="profile" />
              <div>
                <p>1학년 2반 신희성</p>
              </div>
            </S.ProfileDiv>
            <S.BottomRightText>
              {data.memberCount + "/" + data.currentMemberCount}
            </S.BottomRightText>
          </S.BoxDiv>
        );
      })}
    </S.CardBox>
  );
};

export default Card;
