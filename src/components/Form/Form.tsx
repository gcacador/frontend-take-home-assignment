import * as React from 'react';

// TYPES
import { FormProps as Props } from './types';

const Form: React.FunctionComponent<Props> = ({ children, onSubmit }) => {
  return <form onSubmit={onSubmit}>{children}</form>;
};

export { Form };
