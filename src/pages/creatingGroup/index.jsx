import * as S from "./index.js";

function Creating() {
  return (
    <S.Layout>
      <S.Title>그룹 생성하기</S.Title>
      <S.InputContainer>
        <S.Box>
          <S.InputBox>
            <S.Text for="name">그룹 이름을 알려주세요.</S.Text>
            <S.NameInput type="text" name="name"></S.NameInput>
          </S.InputBox>
          <S.InputBox>
            <S.Text for="name">어떤 그룹인지 알려주세요.</S.Text>
            <S.TypeInput type="text" name="type"></S.TypeInput>
          </S.InputBox>
          <S.InputBox>
            <S.Text for="name">최대 참여 인원 수를 알려주세요.</S.Text>
            <S.HeadCountInput type="text" name="HeadCount"></S.HeadCountInput>
          </S.InputBox>
          <S.InputBox>
            <S.Text for="name">1주일 활동 횟수를 알려주세요.</S.Text>
            <S.WeekTimeInput type="number" name="WeekTime"></S.WeekTimeInput>
          </S.InputBox>
          <S.InputBox>
            <S.Text for="name">그룹 모집 마감 날자를 알려주세요.</S.Text>
            <S.DateInput type="date" name="DateInput"></S.DateInput>
          </S.InputBox>
        </S.Box>
        <S.Button>생성하기</S.Button>
      </S.InputContainer>
    </S.Layout>
  );
}

export default Creating;
