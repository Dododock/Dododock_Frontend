import React from "react";
import * as S from "./style";
import profile from "../../assets/profile.svg";

function people() {
  const member = [
    {
      id: 1,
      name: "1학년 2반 12번 신희성",
      img: profile,
    },
    {
      id: 2,
      name: "1학년 3반 4번 김영은",
      img: profile,
    },
    {
      id: 3,
      name: "1학년 3반 8번 오아린",
      img: profile,
    },
    {
      id: 4,
      name: "2학년 1반 6번 이창보",
      img: profile,
    },
  ];
  return (
    <div>
      <S.MemberLayout>
        <S.Member>현재 참여 멤버</S.Member>
        <S.ProfileBox>
          {member.map((item) => (
            <S.Profile key={item.id}>
              <img src={item.img} alt={item.name} />
              <div id="name">{item.name}</div>
            </S.Profile>
          ))}
        </S.ProfileBox>
      </S.MemberLayout>
    </div>
  );
}

export default people;
