import * as React from 'react';

// TYPES
import { FormProps as Props } from './types';

// STYLES
import { StyledForm } from './styles';

const Form: React.FunctionComponent<Props> = ({ children, onSubmit }) => {
  return <StyledForm onSubmit={onSubmit}>{children}</StyledForm>;
};

export { Form };
