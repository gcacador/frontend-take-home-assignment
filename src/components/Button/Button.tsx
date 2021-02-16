import * as React from 'react';

// TYPES
import { ButtonProps as Props } from './types';

// STYLES
import { theme } from '../../styles/theme';
import { StyledButton } from './styles';

const Button: React.FunctionComponent<Props> = ({ children, buttonConfig }) => {
  return (
    <StyledButton theme={theme} {...buttonConfig}>
      {children}
    </StyledButton>
  );
};

export { Button };
