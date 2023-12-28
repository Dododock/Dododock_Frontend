import { useState } from "react";
import * as S from "./index.js";
import axiosInstance from "../util/axios";
import { useNavigate } from "react-router-dom";

function Creating() {
  const navigate = useNavigate();
  const [groupName, setgroupName] = useState("");
  const [simpleDescription, setsimpleDescription] = useState("");
  const [memberCount, setmemberCount] = useState("");
  const [schedule, setschedule] = useState("");
  const [due, setdue] = useState("");

  const sendDataToDB = () => {
    axiosInstance
      .post("/group/create", {
        groupName: groupName,
        simpleDescription: simpleDescription,
        memberCount: memberCount,
        schedule: schedule,
        due: due,
        description: simpleDescription,

      })
      .then((response) => {
        console.log(response);
        goHome();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const goHome = () => {
    navigate("/");
  };

  return (
    <S.Layout>
      <S.Title>그룹 생성하기</S.Title>
      <S.InputContainer>
        <S.Box>
          <S.InputBox>
            <S.Text for="name">그룹 이름을 알려주세요.</S.Text>
            <S.Input
              type="text"
              name="name"
              placeholder="ex) 도도독"
              onChange={(e) => setgroupName(e.target.value)}
            ></S.Input>
          </S.InputBox>
          <S.InputBox>
            <S.Text for="name">어떤 그룹인지 알려주세요.</S.Text>
            <S.Input
              type="text"
              name="type"
              placeholder="최대 100자까지 가능합니다. "
              onChange={(e) => setsimpleDescription(e.target.value)}
            ></S.Input>
          </S.InputBox>
          <S.InputBox>
            <S.Text for="name">최대 참여 인원 수를 알려주세요.</S.Text>
            <S.Input
              type="number"
              name="HeadCount"
              placeholder="10명"
              onChange={(e) => setmemberCount(e.target.value)}
            ></S.Input>
          </S.InputBox>
          <S.InputBox>
            <S.Text for="name">1주일 활동 횟수를 알려주세요.</S.Text>
            <S.Input
              type="text"
              name="WeekTime"
              placeholder="ex) 1주일에 3번"
              onClick={(e) => setschedule(e.target.value)}
            ></S.Input>
          </S.InputBox>
          <S.InputBox>
            <S.Text for="name">그룹 모집 마감 날자를 알려주세요.</S.Text>
            <S.Input
              type="date"
              name="DateInput"
              placeholder="ex) 1주일에 3번"
              onClick={(e) => setdue(e.target.value)}
            ></S.Input>
          </S.InputBox>
        </S.Box>
        <S.Button
          onClick={() => {
            sendDataToDB();
            goHome();
          }}
        >
          생성하기
        </S.Button>
      </S.InputContainer>
    </S.Layout>
  );
}

export default Creating;
