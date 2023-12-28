import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../../pages/login/Login";
import Logo from "../../pages/assets/logo.svg";
import * as S from "./index.js";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogined, setIsLogined] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  useEffect(()=>{
    if(localStorage.getItem("accessToken")) {
      setIsLogined(true)
    }
  }, [localStorage])

  return (
    <S.Layout>
      <Link to="/">
        <S.Logo src={Logo} alt="로고" />
      </Link>
      <S.Emptybox />
      {!isLogined && <S.Button onClick={handleModalOpen}>
        <S.Login>로그인</S.Login>
      </S.Button>}
      {isLogined &&
        <div>1212 신희성</div>
      }
      <Modal isOpen={isModalOpen} onClose={handleModalClose} />
    </S.Layout>
  );
}

export default Header;
