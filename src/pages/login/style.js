import styled from "styled-components";

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  z-index: 1000;
`;

export const ModalBack = styled.div`
  z-index: 1;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const ModalBtn = styled.button`
  background-color: black;
  text-decoration: none;
  border: none;
  padding: 20px;
  color: black;
  border-radius: 30px;
  cursor: grab;
`;

export const ExitBtn = styled(ModalBtn)`
  background-color: white;
  text-decoration: none;
  margin: 10px;
  padding: 5px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ExitImg = styled.img`
  margin-left: 23rem;
`;

export const ModalView = styled.div.attrs(() => ({
  role: "dialog",
}))`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 40px;
  width: 28rem;
  height: 20rem;
  background-color: #ffffff;
`;
export const TextBox = styled.div``;

export const Text = styled.p`
  display: flex;
  justify-content: center;
  margin: 10% 0 0 0;
  align-items: center;
  color: var(--Black, #000);
  font-family: Pretendard;
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const Content = styled.p`
  color: var(--Black, #000);
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const Color = styled.span`
  color: red;
`;

export const LoginBtnBox = styled.div`
  display: flex;
  margin: 5% 0 0 0;
  align-items: center;
  justify-content: center;
  width: 20rem;
  border-radius: 13px;
  border: 1px solid var(--Gray, #dee2e6);
  background: var(--White, #fff);
`;

export const Logo = styled.img``;

export const Title = styled.p`
  align-items: center;
  justify-content: center;
  color: var(--Black, #000);
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  margin-left: 10%;
`;
