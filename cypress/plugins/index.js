const { create } = require('cypress-mochawesome-reporter/plugin');

module.exports = (on, config) => {
  // add other plugins...

  if (config.env.reporter === 'mochawesome') {
    on('after:run', (results) => {
      return create(config, results);
    });
  }

  return config;
};