import styled from 'styled-components';

const StyledFormField = styled.div`
  display: grid;
  gap: 4px;
  width: 100%;
`;

const StyledLabel = styled.label`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: ${props => props.theme.colors.text};
`;

const StyledInput = styled.input`
  display: grid;
  align-items: center;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 4px;
  height: 56px;
  padding: 0 12px;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  color: ${props => props.theme.colors.textMedium};
  appearance: none;

  &[type='date']::-webkit-calendar-picker-indicator {
    display: none;
  }
`;

export { StyledFormField, StyledLabel, StyledInput };
