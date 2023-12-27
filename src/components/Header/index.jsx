import { Link, useNavigate } from "react-router-dom";
// import Logo from "../../pages/assets/dkdrla.png";
import * as S from "./index.js";

function Header() {
  const navigate = useNavigate();
  
  return (
    <S.Layout>
      <Link to="/">{/* <S.Logo src={Logo} alt="로고" /> */}</Link>
      <S.Emptybox />
      <S.Button onClick={() => navigate(`/login`) }>
        <S.Login>로그인</S.Login>
      </S.Button>
    </S.Layout>
  );
}

export default Header;
