const Turbolinks = require("turbolinks");
Turbolinks.start();

let App = {
  init() {
    document.addEventListener('turbolinks:load', () => {
    });

    document.addEventListener('turbolinks:before-render', () => {
    });
  }
}

module.exports = App;
