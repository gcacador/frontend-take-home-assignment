import * as React from 'react';

export type ContainerProps = React.PropsWithChildren<{
  title: string | JSX.Element;
}>;
