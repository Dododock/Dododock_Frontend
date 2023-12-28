import React from "react";
import "./Login";
import ReactDOM from "react-dom";
import * as S from "./style";
import back from "../assets/back.svg";
import BSM from "../assets/BSM.svg";

export const Modal = ({ isOpen, onClose }) => {

  const handleLoginClick = () => {
    window.location.href = "https://auth.bssm.kro.kr/oauth?clientId=75711f76&redirectURI=http://localhost:3000/oauth";
  };

  return ReactDOM.createPortal(
    <>
      <S.ModalContainer>
        {isOpen ? (
          <S.ModalBack onClick={onClose}>
            <S.ModalView onClick={(e) => e.stopPropagation()}>
              <S.ExitBtn onClick={onClose}>
                <S.ExitImg src={back} />
              </S.ExitBtn>
              <S.TextBox>
                <S.Text> 로그인</S.Text>
                <S.Content>
                  <S.Color>도도독</S.Color>에 오신 것을 환영합니다.
                </S.Content>
              </S.TextBox>
              <S.LoginBtnBox>
                <S.Logo src={BSM} />
                <S.Title onClick={handleLoginClick}>BSM으로 로그인하기</S.Title>
              </S.LoginBtnBox>
            </S.ModalView>
          </S.ModalBack>
        ) : null}
      </S.ModalContainer>
    </>,
    document.body,
  );
};

export default Modal;
