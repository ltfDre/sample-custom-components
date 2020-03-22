import React from 'react'
import styled, { css } from 'styled-components';

import { Wrapper, FadeIn } from './styled/index';

const StyledButton = styled.button`
  background-color: ${props => props.theme.colors.text};
  color: ${props => props.theme.colors.main}
  font-size: ${props => props.theme.fontSizes.p};
  margin: 1rem;
  padding: .5rem 1rem;
  border: 1px solid palevioletred;
  border-radius: 3px;
  animation: 2s ${FadeIn} ease-in;

    ${({ primary }) => primary && css`
      background-color: palevioletred;
      color: white;
      box-shadow: 0 .5rem rgba(0,0,0,.2);
    `}
  
  &:hover{
    color: white;
    background-color: lightblue;
  }
`;

const OutterWrapper = styled.div`
  width: 100%;
  background-color: blueviolet;
  margin-top: 2rem;
  
  &:hover ${StyledButton} {
    color: red;
  }
`;


const SuperButton = styled(StyledButton)`
  font-size: 2.5rem;
`;

const Button = ({ children, primary }) => {
  return (
    <OutterWrapper>
      <StyledButton primary={primary}>
        {children}
        <p classame="someClasses"></p>
      </StyledButton>
    </OutterWrapper>
  )
}

export default Button;