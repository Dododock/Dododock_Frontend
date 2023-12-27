import { Link } from "react-router-dom";
import * as S from "./index.js";
import Logo from "../../pages/assets/dodok.svg";

function Header() {
  return (
    <S.Layout>
      <Link to="/">
        <S.Logo src={Logo} alt="로고" />
      </Link>
      <S.Emptybox />
      <S.Button>
        <S.Login>로그인</S.Login>
      </S.Button>
    </S.Layout>
  );
}

export default Header;
