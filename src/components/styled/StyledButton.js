import styled , { css} from 'styled-components';
import { FadeIn } from './FadeIn'
export const StyledButton = styled.button`
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