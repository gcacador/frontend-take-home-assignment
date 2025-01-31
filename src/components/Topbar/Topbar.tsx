import * as React from 'react';

// ASSETS
import logo from '../../icons/logo.svg';

// STYLES
import { theme } from '../../styles/theme';
import { StyledTopbar } from './styles';

const Topbar: React.FunctionComponent = () => {
  return (
    <StyledTopbar theme={theme}>
      <img src={logo} />
    </StyledTopbar>
  );
};

export { Topbar };
