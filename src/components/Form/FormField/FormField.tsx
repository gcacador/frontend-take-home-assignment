import * as React from 'react';

// ASSETS
import moneyIcon from '../../../icons/dollar-sign.svg';

// PROPS
import { FormFieldProps as Props } from './types';

// STYLES
import { theme } from '../../../styles/theme';
import {
  StyledFormField,
  StyledLabel,
  StyledIcon,
  StyledInput
} from './styles';

const FormField: React.FunctionComponent<Props> = ({
  id,
  label,
  type,
  onChange,
  elRef,
  inputConfig
}) => {
  const inputType = type === 'money' ? 'number' : type;

  return (
    <StyledFormField ref={elRef}>
      <StyledLabel theme={theme} htmlFor={id}>
        {label}
      </StyledLabel>
      {type === 'money' && <StyledIcon src={moneyIcon} />}
      <StyledInput
        theme={theme}
        id={id}
        onChange={onChange}
        type={inputType}
        {...inputConfig}
      />
    </StyledFormField>
  );
};

export { FormField };
