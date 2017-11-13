import React from 'react';
import capitalize from 'lodash/capitalize'

export default class SomeOtherComponent extends React.Component {
  render() {
    return (
      <div>
        <p>{capitalize('The JS that renders this component has only been requested when the button is clicked on.')}</p>
      </div>
    );
  }
}
