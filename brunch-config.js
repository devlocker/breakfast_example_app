module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'app.js': /^app\/frontend\/js\//,
        'vendor.js': /^(?!app\/frontend\/js)/
      }
    },
    stylesheets: {
      joinTo: 'app.css'
    }
  },

  plugins: {
    babel: {
      presets: ['es2015', 'react']
    },
    postcss: {
      processors: [
        require('autoprefixer')(['last 8 versions']),
      ]
    }
  },

  paths: {
    watched: [
      "app/frontend",
    ],

    public: "public/assets"
  },

  conventions: {
     assets: /^(app\/frontend\/images)/
  },

  npm: {
    globals: {
      $: "jquery",
      jQuery: "jquery",
      breakfast: "breakfast-rails"
    }
  }
};
