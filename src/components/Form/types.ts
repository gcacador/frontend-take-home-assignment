import * as React from 'react';

export type FormProps = React.PropsWithChildren<{
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  elements: React.MutableRefObject<
    HTMLButtonElement | HTMLInputElement | null
  >[];
}>;
