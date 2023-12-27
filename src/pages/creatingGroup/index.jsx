import * as S from "./index.js";

function Creating() {
  return (
    <S.Layout>
      <S.Title>그룹 생성하기</S.Title>
      <S.InputContainer>
        <S.TextBox>
          <S.Text for="name">그룹 이름을 알려주세요.</S.Text>
          <S.Text for="name">어떤 그룹인지 알려주세요.</S.Text>
          <S.Text for="name">최대 참여 인원 수를 알려주세요.</S.Text>
          <S.Text for="name">1주일 활동 횟수를 알려주세요.</S.Text>
          <S.Text for="name">그룹 모집 마감 날자를 알려주세요.</S.Text>
        </S.TextBox>
        <S.InputBox>
          <S.NameInput type="text" name="name"></S.NameInput>
          <S.TypeInput type="text" name="type"></S.TypeInput>
          <S.HeadCountInput type="text" name="HeadCount"></S.HeadCountInput>
          <S.WeekTimeInput type="number" name="name"></S.WeekTimeInput>
          <S.DateInput type="date" name="name"></S.DateInput>
        </S.InputBox>
      </S.InputContainer>
      <S.Button>생성하기</S.Button>
    </S.Layout>
  );
}

export default Creating;
