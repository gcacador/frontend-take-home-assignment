import * as React from 'react';

// TYPES
import { FormProps as Props } from './types';

// STYLES
import { StyledForm } from './styles';

const Form: React.FunctionComponent<Props> = ({
  children,
  onSubmit,
  elements
}) => {
  React.useEffect(() => {
    elements.forEach((element, idx) => {
      element.current.style.gridArea = `element-${idx}`;
      console.log(element.current.style.gridArea);
    });
  }, [elements]);

  return <StyledForm onSubmit={onSubmit}>{children}</StyledForm>;
};

export { Form };
