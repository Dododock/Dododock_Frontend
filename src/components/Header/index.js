import styled from "styled-components";
import color from "../../styles/color";

export const Layout = styled.div`
  position: sticky;
  display: flex;
  align-items: center;
  gap: 50px;
  width: 100%;
  height: 8vh;
  overflow: hidden;
  border-bottom: 1px solid #72837b;
`;
export const Logo = styled.img`
  margin-left: 10px;
  margin-top: 10px;
  height: 60px;
`;

export const Emptybox = styled.div`
  width: 85%;
`;

export const Button = styled.button`
  border-radius: 15px;
  border: none;
  box-shadow: 0px 1px 3px 0px;
  background-color: ${color.white};
  font-weight: 700;
  font-family: pretendard;

  &:active {
    background-color: ${color.gray};
  }
`;

export const Login = styled.div`
  margin-top: 3px;
  margin-bottom: 3px;
  margin-left: 7px;
  margin-right: 7px;
`;
