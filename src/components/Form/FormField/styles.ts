import styled from 'styled-components';

const StyledFormField = styled.div`
  position: relative;
  display: grid;
  gap: 4px;
  grid-template-columns: minmax(0, 1fr);
  width: 100%;
`;

const StyledLabel = styled.label`
  font-family: 'Work Sans', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: ${props => props.theme.colors.text};

  @media (min-width: 900px) {
    font-size: 14px;
    line-height: 22px;
  }
`;

const StyledIcon = styled.img`
  position: absolute;
  bottom: 28px;
  left: 13px;
  transform: translateY(50%);
`;

const StyledInput = styled.input`
  display: grid;
  align-items: center;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 4px;
  height: 56px;
  padding: 0 12px;
  font-family: 'Rubik', sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  color: ${props => props.theme.colors.textMedium};
  appearance: none;

  &[type='number'] {
    padding-left: 44px;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      appearance: none;
    }
  }

  &[type='date']::-webkit-calendar-picker-indicator {
    display: none;
  }

  @media (min-width: 900px) {
    font-size: 24px;
    line-height: 28px;
  }
`;

export { StyledFormField, StyledLabel, StyledIcon, StyledInput };
