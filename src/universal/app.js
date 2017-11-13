import React from 'react';

export default class App extends React.Component {
  constructor() {
    super();

    this.Component = null;

    this.loadOtherComponent = this.loadOtherComponent.bind(this);
  }

  async loadOtherComponent() {
    this.Component =
      await import(
        /* webpackChunkName: "someothercomponent" */
        './some-other-component'
      );

      this.forceUpdate();
  }

  render() {
    return (
      <div>
        <button onClick={this.loadOtherComponent}>Click Me!</button>
        {this.Component ? <this.Component.default /> : null}
      </div>
    );
  }
}
