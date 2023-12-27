import styled, { css } from "styled-components";

export const DetailLayout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5% 20% 8% 20%;
`;

export const Undo = styled.img`
  display: flex;
`;

export const UndoBox = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 1% 0;
  color: var(--gray7, #495057);
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const PostTitleBox = styled.div`
  display: flex;
`;

export const PostImg = styled.img``;
export const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 2%;
`;
export const Title = styled.span`
  color: var(--Black, #000);
  margin: 3% 0 4% 0;
  font-family: Pretendard;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Content = styled.div`
  > p {
    margin: 0;
    color: var(--Black, #000);
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const JoinBtn = styled.div`
  display: flex;
  width: 200px;
  padding: 3% 4% 3% 4%;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: var(--Red-6, #fa5252);

  color: var(--Black, #000);
  margin: 10% 0 0 0;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const PostDetail = styled.div`
  display: flex;
  color: var(--Black, #000);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 5% 0 0 0;
`;
export const People = styled.div`
  margin-right: 1%;
  cursor: pointer;

  ${(props) =>
    props.isActive &&
    css`
      border-bottom: 2.5px solid #fa5252;
    `}
`;
export const Activity = styled.div`
  margin-right: 1%;
  cursor: pointer;

  ${(props) =>
    props.isActive &&
    css`
      border-bottom: 2.5px solid #fa5252;
    `}
`;
export const Deadline = styled.div`
  margin-right: 1%;
  cursor: pointer;
  ${(props) =>
    props.isActive &&
    css`
      border-bottom: 2.5px solid #fa5252;
    `}
`;
