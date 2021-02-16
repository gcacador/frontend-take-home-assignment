import * as React from 'react';

// STYLES
import { theme } from '../../styles/theme';
import { StyledContainer, StyledTitle } from './styles';

const Container: React.FunctionComponent<React.PropsWithChildren<{}>> = ({
  children
}) => {
  return (
    <StyledContainer theme={theme}>
      <StyledTitle theme={theme}>
        Let{"'"}s plan your <strong>saving goal.</strong>
      </StyledTitle>

      {children}
    </StyledContainer>
  );
};

export { Container };
