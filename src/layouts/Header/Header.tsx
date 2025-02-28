import { ROUTES } from "@constants";
import { Link } from "react-router-dom";
import mainLogo from "@assets/images/logo.jpg";
import styled from "styled-components";

export const Header = () => {
  return (
    <HeaderDiv>
      <Link to={ROUTES.home}>
        <MainLogo src={mainLogo} alt="Main Logo" />
      </Link>
      {/* <button>Any Button</button> */}
    </HeaderDiv>
  );
};

const HeaderDiv = styled.div`
  position: fixed;
  top: 0;
  padding: 2em;
  width: 100%;
  gap: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  @media (max-width: 575px) {
    height: 46px;
  }
`;
const MainLogo = styled.img`
  width: 100px;
`;

export default Header;
