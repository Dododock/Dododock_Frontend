import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5% 10% 5% 10%;
`;

export const Title = styled.div`
  color: var(--Black, #000);
  margin: 0 0 4% 0;
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Text = styled.label`
  color: var(--Black, #000);

  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const InputBox = styled.div`
  display: flex;
  width: 35rem;
  margin: 2%;
`;

export const Input = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

export const Button = styled.button`
  width: 10rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
  border-radius: 13px;
  border: 1px solid var(--Gray, #dee2e6);
  background: #dee2e6;
`;
