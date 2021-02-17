import * as React from 'react';

// TYPES
import { ResultProps as Props } from './types';

// STYLES
import { theme } from '../../styles/theme';
import { StyledResult, StyledLabel, StyledInput, StyledText } from './styles';

const Result: React.FunctionComponent<Props> = ({
  label,
  text,
  value,
  elRef
}) => {
  return (
    <StyledResult theme={theme} ref={elRef}>
      <StyledLabel theme={theme}>{label}</StyledLabel>
      <StyledInput theme={theme} type="text" value={`$${value}`} readOnly />

      {text && <StyledText theme={theme}>{text}</StyledText>}
    </StyledResult>
  );
};

export { Result };
