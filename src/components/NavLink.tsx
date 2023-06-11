import React, { useEffect } from 'react';
import styled from 'styled-components';

import { WEIGHTS } from '../utils/constants';

interface IProps{
  children:any,
  href:string
}


const NavLink = ({children,href}:IProps) => {
  
  return (
    <Wrapper href={href}>
      <MainText> {children}</MainText>
      <HoverText aria-hidden={true}> {children}</HoverText>
    </Wrapper>
  );
};

const Wrapper = styled.a`
  position: relative;
  display: block;
  font-size: 1rem;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.normal};
  overflow: hidden;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Text = styled.span`
  display: block;
  transform: translateY(var(--translate-from));
  transition: transform 500ms;

  @media (prefers-reduced-motion: no-preference) {
    ${Wrapper}:hover & {
      transition: transform 250ms;
      transform: translateY(var(--translate-to));
    }
  }
`;

const MainText = styled(Text)`
  --translate-from: 0%;
  --translate-to: -100%;
  padding: 0.1rem;
  
`;
const HoverText = styled(Text)`
  --translate-from: 100%;
  --translate-to: 0%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-weight: ${WEIGHTS.medium};
`;

export default NavLink;
