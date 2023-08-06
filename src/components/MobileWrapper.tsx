import { styled } from "styled-components";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import { WEIGHTS } from "../utils/constants";
import { X } from "react-feather";

interface IProps {
  isOpen: boolean;
  onDismiss: () => void;
}

const MobileWrapper = ({ isOpen, onDismiss }: IProps) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="Menu">
        <MobileExit onClick={onDismiss}>
          <X />
        </MobileExit>
        <Filler />
        <Nav>
          <ul>
            <li>
              <NavLink href="#">About Us</NavLink>
            </li>
            <li>
              <NavLink href="#">Contact</NavLink>
            </li>
          </ul>
        </Nav>
      </Content>
    </Overlay>
  );
};

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NavLink = styled.a`
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  text-decoration: none;
  font-size: 1.125rem;
  text-transform: uppercase;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const MobileExit = styled.button`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;
  background: transparent;
  border: none;
`;

const Filler = styled.div`
  flex: 1;
`;

const Content = styled(DialogContent)`
  background: white;
  width: 300px;
  height: 100%;
  padding: 32px;
  display: flex;
  flex-direction: column;
`;

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-backdrop);
  display: flex;
  justify-content: flex-end;
`;

// const MobileAside = styled.aside`
//   position: fixed;
//   height: 100vh;
//   z-index: 1;
//   right: 0;
//   top: 0;
//   background-color: var(--color-primary);
//   width: 40%;
//   padding: 3em;
//   text-align: right;
//   transition: transform 0.6s;
//   transform: translateX(100%);
// `

export default MobileWrapper;
