import * as React from 'react';

export interface CardHeaderProps {
  icon: string;
  title: string;
  subtitle?: string;
}

export type CardProps = React.PropsWithChildren<{
  header: CardHeaderProps;
}>;
