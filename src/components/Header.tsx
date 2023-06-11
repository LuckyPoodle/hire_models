import { useState } from "react";
import Logo from "./Logo";
import styled from 'styled-components';
import { QUERIES } from "../utils/constants";
import NavLink from "./NavLink";


const Header = () => {

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <MainHeader>
      <Logo />
      <DesktopNav>
        <NavLink href={"/about"}>About Us</NavLink>
        <NavLink href={"/contact"}>Contact</NavLink>
      </DesktopNav>
    </MainHeader>
  );
};

export default Header;


const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
  margin: 0px 48px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;



const MainHeader=styled.header`
 display: flex;
 justify-content: space-between;
 padding: 1rem;
  
`