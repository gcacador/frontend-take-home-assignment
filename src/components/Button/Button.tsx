import * as React from 'react';

import { ButtonProps as Props } from './types';

const Button: React.FunctionComponent<Props> = ({ children, buttonConfig }) => {
  return <button {...buttonConfig}>{children}</button>;
};

export { Button };
