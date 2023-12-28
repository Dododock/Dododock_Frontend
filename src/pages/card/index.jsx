import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../util/axios";
import * as S from "./index";

const formatDueDate = (dateStr) => {
  const [month, day] = new Date(dateStr).toISOString().split("T")[0].split("-");
  return `${month}월 ${day}일`;
};

const Card = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    axiosInstance
      .get("/group/find/all")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setData(response.data);
        } else {
          throw new Error("Data received from server is not an array");
        }
      })
      .catch((error) => {
        console.error("An error occurred while fetching data: ", error);
      });
  }, []);


  const navigate = (id) => {
    console.log(`Go to post/${id}`);
  };

  return (
    <S.CardBox>
      {data.map((data, id) => {
        return (
          <S.BoxDiv onClick={() => navigate(data.id)}>
            <Link to={`/detail/${data.id}`} style={{ textDecoration: "none" }}>
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
            </Link>
          </S.BoxDiv>
        );
      })}
    </S.CardBox>
  );
};

export default Card;
