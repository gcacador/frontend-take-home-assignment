import * as React from 'react';

export interface FormFieldProps {
  label: string;
  id: string;
  type: 'money' | 'date';
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  elRef: React.MutableRefObject<HTMLDivElement | null>;
  inputConfig: React.InputHTMLAttributes<{}>;
}
