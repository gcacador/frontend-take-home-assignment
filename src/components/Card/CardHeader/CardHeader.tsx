import * as React from 'react';

const CardHeader: React.FunctionComponent<React.PropsWithChildren<{}>> = ({
  children
}) => {
  return <header>{children}</header>;
};

export { CardHeader };
