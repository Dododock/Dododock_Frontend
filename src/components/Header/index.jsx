import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modal from "../../pages/login/Login"; // Modal 컴포넌트를 import 합니다.
import * as S from "./index.js";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true); 
  };

  const handleModalClose = () => {
    setIsModalOpen(false); 
  };

  return (
    <S.Layout>
      <Link to="/">{/* <S.Logo src={Logo} alt="로고" /> */}</Link>
      <S.Emptybox />
      <S.Button onClick={handleModalOpen}>
        <S.Login>로그인</S.Login>
      </S.Button>
      <Modal isOpen={isModalOpen} onClose={handleModalClose} /> 
      {/* Modal 컴포넌트를 렌더링하며, 모달의 상태와 상태를 변경하는 함수를 props로 전달합니다. */}
    </S.Layout>
  );
}

export default Header;
