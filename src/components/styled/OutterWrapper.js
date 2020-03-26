import styled from 'styled-components';
import { StyledButton } from './StyledButton';

export const OutterWrapper = styled.div`
  width: 100%;
  background-color: blueviolet;
  margin-top: 2rem;
  
  &:hover ${StyledButton} {
    color: red;
  }
`;