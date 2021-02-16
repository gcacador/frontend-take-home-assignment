import styled from 'styled-components';

const StyledButton = styled.button`
  border: none;
  border-radius: 32px;
  width: 100%;
  padding: 18px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.primary};
  transition: background-color 0.25s ease-in-out;

  &:focus,
  &:active {
    outline: none;
  }

  &:focus,
  &:hover {
    background-color: ${props => props.theme.colors.primaryDark};
  }
`;

export { StyledButton };
