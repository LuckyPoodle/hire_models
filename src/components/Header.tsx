import { useState } from "react";
import Logo from "./Logo";
import styled from "styled-components";
import { QUERIES } from "../utils/constants";
import NavLink from "./NavLink";
import MobileWrapper from "./MobileWrapper";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <MainHeader>
      <Logo />
      <MobileMenuEntry
        onClick={() => {
          setShowMobileMenu(true);
        }}
      >
        <svg>
          <path
            d="M18 27H4.5V24H18V27ZM31.5 19.5H4.5V16.5H31.5V19.5ZM31.5 12H18V9H31.5V12Z"
            fill="black"
          />
        </svg>
      </MobileMenuEntry>
      <DesktopNav>
        <NavLink href={"/#"}>About Us</NavLink>
        <NavLink href={"/#"}>Contact</NavLink>
      </DesktopNav>
      <MobileWrapper
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
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

const MobileMenuEntry = styled.div`
  display: none;
  @media ${QUERIES.tabletAndSmaller} {
    display: flex;
    width: 30px;
  }
`;

const MainHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;
