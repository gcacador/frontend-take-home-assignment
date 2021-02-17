import * as React from 'react';

export type ButtonProps = React.PropsWithChildren<{
  buttonConfig: React.ButtonHTMLAttributes<{}>;
  elRef: React.MutableRefObject<HTMLButtonElement | null>;
}>;
