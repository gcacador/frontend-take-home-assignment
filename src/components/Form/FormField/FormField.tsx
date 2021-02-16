import * as React from 'react';

// PROPS
import { FormFieldProps as Props } from './types';

// STYLES
import { theme } from '../../../styles/theme';
import { StyledFormField, StyledLabel, StyledInput } from './styles';

const FormField: React.FunctionComponent<Props> = ({
  id,
  label,
  inputConfig
}) => {
  return (
    <StyledFormField>
      <StyledLabel theme={theme} htmlFor={id}>
        {label}
      </StyledLabel>
      <StyledInput theme={theme} id={id} {...inputConfig} />
    </StyledFormField>
  );
};

export { FormField };
