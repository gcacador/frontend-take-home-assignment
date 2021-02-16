import * as React from 'react';

// PROPS
import { FormFieldProps as Props } from './types';

const FormField: React.FunctionComponent<Props> = ({
  id,
  label,
  inputConfig
}) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...inputConfig} />
    </div>
  );
};

export { FormField };
