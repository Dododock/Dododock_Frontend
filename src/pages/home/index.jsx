import { useNavigate } from "react-router-dom";
import Icon from "../assets/fire-icon.svg";
import Card from "../card/index.jsx";
import * as S from "./index.js";

function Home() {
  const navigate = useNavigate();

  return (
    <S.Layout>
      <S.TextBox>
        <S.Title>
          <S.Icon src={Icon} alt="불 아이콘" />
          <S.TitleText>현재 모집 중인 그룹</S.TitleText>
        </S.Title>
        <S.Creating onClick={() => navigate(`/CreatingGroup`)}>
          그룹 생성하기
        </S.Creating>
        <S.Gain>그룹 모아보기</S.Gain>
      </S.TextBox>
      <Card />
    </S.Layout>
  );
}

export default Home;
