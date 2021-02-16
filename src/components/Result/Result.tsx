import * as React from 'react';

import { ResultProps as Props } from './types';

const Result: React.FunctionComponent<Props> = ({ label, text, value }) => {
  return (
    <div>
      <label>{label}</label>
      <input type="number" value={value} readOnly />

      {text && <p>{text}</p>}
    </div>
  );
};

export { Result };
