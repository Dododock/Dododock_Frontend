import React, { useState } from "react";
import "./Login";
import * as S from "./style";
import back from "../assets/back.svg";
import BSM from "../assets/BSM.svg";

export const Modal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <S.ModalContainer>
        <S.ModalBtn onClick={openModalHandler}>Toggle Modal</S.ModalBtn>
        {isOpen ? (
          <S.ModalBack onClick={openModalHandler}>
            <S.ModalView onClick={(e) => e.stopPropagation()}>
              <S.ExitBtn onClick={() => setIsOpen(false)}>
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
                <S.Title>BSM으로 로그인하기</S.Title>
              </S.LoginBtnBox>
            </S.ModalView>
          </S.ModalBack>
        ) : null}
      </S.ModalContainer>
    </>
  );
};

export default Modal;
