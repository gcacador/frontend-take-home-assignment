import * as React from 'react';

export interface FormFieldProps {
  label: string;
  id: string;
  inputConfig: React.InputHTMLAttributes<{}>;
}
