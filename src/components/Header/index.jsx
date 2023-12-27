import { Link } from "react-router-dom";
import Logo from "../../pages/assets/logo.png";
import * as S from "./index.js";

function Header() {
  return (
    <S.Layout>
      <Link to="/">
        <S.Logo src={Logo} alt="로고"></S.Logo>
      </Link>
      <S.EmptyBox />
      <S.Button>
        <S.Login>로그인</S.Login>
      </S.Button>
    </S.Layout>
  );
}

export default Header;
