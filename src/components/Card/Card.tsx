import * as React from 'react';

// COMPONENTS
import { CardHeader } from './CardHeader/CardHeader';

// TYPES
import { CardProps as Props } from './types';

const Card: React.FunctionComponent<Props> = ({ header, children }) => {
  return (
    <>
      <CardHeader>{header}</CardHeader>
      <main>{children}</main>
    </>
  );
};

export { Card };
