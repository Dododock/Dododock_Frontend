import Icon from "../assets/fire-icon.svg";
import * as S from "./index.js";

function Home() {
  return (
    <S.Layout>
      <S.TextBox>
        <S.Title>
          <S.Icon src={Icon} alt="불 아이콘" />
          <S.TitleText>현재 모집 중인 그룹</S.TitleText>
        </S.Title>
        <S.Creating>그룹 생성하기</S.Creating>
      </S.TextBox>
    </S.Layout>
  );
}

export default Home;
