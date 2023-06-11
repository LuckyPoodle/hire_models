import React from 'react';
import styled from 'styled-components';
import { WEIGHTS } from '../utils/constants';

const Logo = (props:any) => {
  return (
    <Link href="/">
      <Wrapper {...props}>HireModels</Wrapper>
    </Link>
  );
};

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Wrapper = styled.h1`
  font-size: 1.5rem;
  font-style: italic;
  font-weight: ${WEIGHTS.bold};
`;

export default Logo;
