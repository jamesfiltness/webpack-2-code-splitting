import React from 'react';
import _ from 'lodash';

const SomeOtherComponent = () => {
  return (
    <div>
      <p>{_.capitalize('hello world')}</p>
    </div>
  );
}

export default SomeOtherComponent

