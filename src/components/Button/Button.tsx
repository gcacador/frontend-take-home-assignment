import * as React from 'react';

// TYPES
import { ButtonProps as Props } from './types';

// STYLES
import { theme } from '../../styles/theme';
import { StyledButton } from './styles';

const Button: React.FunctionComponent<Props> = ({
  children,
  buttonConfig,
  elRef
}) => {
  return (
    <StyledButton theme={theme} ref={elRef} {...buttonConfig}>
      {children}
    </StyledButton>
  );
};

export { Button };
