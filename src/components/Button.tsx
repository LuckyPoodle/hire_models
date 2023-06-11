import styled from 'styled-components';
import { COLORS } from '../utils/constants';

export default styled.button`
  margin: 0;
  padding: 6px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  background-color: ${COLORS.gray};

  &:focus {
    outline-offset: 2px;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }
`;
