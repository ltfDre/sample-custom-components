import React from 'react'
import { OutterWrapper, StyledButton } from './styled';


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