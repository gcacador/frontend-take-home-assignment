import * as React from 'react';

const Container: React.FunctionComponent<React.PropsWithChildren<{}>> = ({
  children
}) => {
  return (
    <main>
      <h1>
        Let{"'"}s plan your <strong>saving goal.</strong>
      </h1>

      {children}
    </main>
  );
};

export { Container };
