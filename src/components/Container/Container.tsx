import * as React from 'react';

// TYPES
import { ContainerProps as Props } from './types';

// STYLES
import { theme } from '../../styles/theme';
import { StyledContainer, StyledTitle } from './styles';

const Container: React.FunctionComponent<Props> = ({ children, title }) => {
  return (
    <StyledContainer theme={theme}>
      {title && <StyledTitle theme={theme}>{title}</StyledTitle>}

      {children}
    </StyledContainer>
  );
};

export { Container };
