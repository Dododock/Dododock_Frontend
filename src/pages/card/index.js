import styled from "styled-components";

export const CardBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const BoxDiv = styled.div`
  width: calc(29%);
  max-width: 396px;
  height: 398px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #ddd;
  border-radius: 28px;
  padding: 15px;
  margin: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  position: relative;
  margin-top: 20px;
  
  &:hover {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
  }
`;

export const DeadlineDiv = styled.div`
  font-size: 12px;
  color: #333;
  margin-top: 25px;
  margin-bottom: 2px;
`;

export const DododokDiv = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin-top: 5px;
  margin-bottom: 3px;
`;

export const ImageContainer = styled.div`
  margin-top: 0;
  img {
    width: 100%;
    height: 141px;
    object-fit: cover;
    border-radius: 12px;
  }
`;

export const BoardDiv = styled.div`
  margin-top: 10px;
  h1 {
    font-size: 1.2em;
    color: #333;
    margin-bottom: 5px;
  }
  h2 {
    font-size: 1em;
    color: #666;
    margin-bottom: 5px;
  }
  hr {
    border: 0.5px solid #ddd;
    margin: 10px 0;
  }
  span {
    font-size: 0.8em;
    color: #999;
  }
`;

export const ProfileDiv = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 28px;
    height: 28px;
    margin-right: 8px;
    border-radius: 50%;
  }
  div {
    p {
      font-size: 16px;
      color: #333;
      margin: 0;
    }
  }
`;

export const BottomRightText = styled.p`
  font-size: 18px;
  color: #333;
  text-align: right;
  margin: 0;
  position: absolute;
  bottom: 8px;
  right: 8px;
  padding: 8px;
`;
