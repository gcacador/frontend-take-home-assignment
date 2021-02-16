import * as React from 'react';

// COMPONENTS
import { CardHeader } from './CardHeader/CardHeader';

// TYPES
import { CardProps as Props } from './types';

// STYLES
import { theme } from '../../styles/theme';
import { StyledCard } from './styles';

const Card: React.FunctionComponent<Props> = ({ header, children }) => {
  return (
    <StyledCard theme={theme}>
      <CardHeader {...header}>{header}</CardHeader>
      {children}
    </StyledCard>
  );
};

export { Card };
