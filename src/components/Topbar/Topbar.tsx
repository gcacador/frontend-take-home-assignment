import * as React from 'react';

// ASSETS
import logo from '../../icons/logo.svg';

// STYLES
import { StyledTopbar } from './styles';

const Topbar: React.FunctionComponent = () => {
  return (
    <StyledTopbar>
      <img src={logo} />
    </StyledTopbar>
  );
};

export { Topbar };
