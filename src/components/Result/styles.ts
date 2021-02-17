import styled from 'styled-components';

const StyledResult = styled.div`
  display: grid;
  grid-template-areas: 'label input' 'text text';
  grid-template-columns: minmax(min-content, max-content) minmax(0, 1fr);
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 4px;
  width: 100%;
`;

const StyledLabel = styled.label`
  padding: 24px 0 24px 24px;
  grid-area: label;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  color: ${props => props.theme.colors.text};

  @media (min-width: 900px) {
    padding: 32px 0 32px 32px;
    font-size: 20px;
    line-height: 24px;
  }
`;

const StyledInput = styled.input`
  padding: 24px;
  grid-area: input;
  margin: 0;
  border: none;
  text-align: right;
  font-size: 24px;
  font-weight: 500;
  line-height: 28px;
  color: ${props => props.theme.colors.secondary};

  &:focus,
  &:active {
    outline: none;
  }

  @media (min-width: 900px) {
    padding: 32px;
    font-size: 32px;
    line-height: 38px;
  }
`;

const StyledText = styled.p`
  grid-area: text;
  align-items: center;
  padding: 24px;
  margin: 0;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.base};
  width: 100%;
  height: 100%;

  > strong {
    font-weight: 600;
  }

  @media (min-width: 900px) {
    padding: 24px 32px;
  }
`;

export { StyledResult, StyledLabel, StyledInput, StyledText };
