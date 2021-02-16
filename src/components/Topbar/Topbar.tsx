import * as React from 'react';

// ASSETS
import logo from '../../icons/logo.svg';

const Topbar: React.FunctionComponent = () => {
  return (
    <header>
      <img src={logo} />
    </header>
  );
};

export { Topbar };
