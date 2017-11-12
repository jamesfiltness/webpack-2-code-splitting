import React from 'react';
import _ from 'lodash';

export default class SomeOtherComponent extends React.Component {
  render() {
    return (
      <div>
        <p>{_.capitalize('hello world')}</p>
      </div>
    );
  }
}
