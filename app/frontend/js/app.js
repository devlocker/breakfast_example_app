import ReactDOM from 'react-dom';
import React from 'react'
import Hello from './components/Hello';

const Turbolinks = require("turbolinks");
Turbolinks.start();

let App = {
  init() {
    document.addEventListener('turbolinks:load', () => {
      ReactDOM.render(<Hello />, document.querySelector('#react-example'));
    });

    document.addEventListener('turbolinks:before-render', () => {
      ReactDOM.unmountComponentAtNode(document.querySelector('#react-example'));
    });
  }
}

module.exports = App;
