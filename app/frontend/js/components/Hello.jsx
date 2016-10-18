import React from 'react';

export default class Hello extends React.Component {
  render() {
    return (
      <div>
        <h2>This is rendered with React!</h2>
        <div>See how easy it is to setup!</div>
        <div>
          <div><a href="https://github.com/devlocker/breakfast">Breakfest Gem</a></div>
          <div><a href="http://breakfast.devlocker.io">Breakfest Docs</a></div>
          <div><a href="https://facebook.github.io/react/index.html">React Docs</a></div>
        </div>
      </div>
    )
  }
}
