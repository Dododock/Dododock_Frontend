import React from "react";
import * as S from "./style";

const Deadline = () => {
  return (
    <div>
      <S.DeadlineLayout>
        <S.DeadLineStart>모집 시작 기한: 12월 8일</S.DeadLineStart>
        <S.DeadLineEnd>모집 마감 기한: 12월 29일</S.DeadLineEnd>
      </S.DeadlineLayout>
    </div>
  );
};

export default Deadline;
