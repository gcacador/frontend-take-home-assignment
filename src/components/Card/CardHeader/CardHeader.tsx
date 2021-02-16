import * as React from 'react';

// TYPES
import { CardHeaderProps as Props } from '../types';

// STYLES
import { theme } from '../../../styles/theme';
import { StyledCardHeader, StyledTitle, StyledSubTitle } from './styles';

const CardHeader: React.FunctionComponent<Props> = ({
  icon,
  title,
  subtitle
}) => {
  return (
    <StyledCardHeader>
      <img src={icon} />
      <div>
        <StyledTitle theme={theme}>{title}</StyledTitle>
        {subtitle && <StyledSubTitle theme={theme}>{subtitle}</StyledSubTitle>}
      </div>
    </StyledCardHeader>
  );
};

export { CardHeader };
