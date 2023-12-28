import styled from "styled-components";
import color from "../../styles/color";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  white-space: nowrap;
  padding-top: 4%;
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 1.5em;
  margin-bottom: 4%;
`;

export const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.label`
  font-weight: 500;
  font-size: 1.3em;
  font-family: pretendard;
  margin-right: 4%;
`;
export const InputBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10%;
`;

export const NameInput = styled.input`
  margin-left: 30%;
`;

export const TypeInput = styled.input`
  margin-left: 30%;
`;

export const HeadCountInput = styled.input`
  margin-left: 30%;
`;

export const WeekTimeInput = styled.input`
  margin-left: 30%;
`;

export const DateInput = styled.input`
  margin-left: 10%;
`;

export const Button = styled.button`
  margin-top: 10%;
  background-color: ${color.gray};
  border: none;
  border-radius: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-weight: 600;
  font-family: pretendard;
`;
