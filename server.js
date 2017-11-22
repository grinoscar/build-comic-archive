/* eslint-disable global-require */
const express = require('express');
const { name } = require('./package.json');

/**
 * Log any error and shut down the application.
 *
 * @param {Object} error
 * The error that occurred.
 *
 * @returns {void}
 */
function handleError(error) {
  // log it
  console.log(error);

  // shutdown
  process.exit(1);
}


/**
 * Start the application
 *
 * @param {Object} configs
 * The loaded application configuration.
 *
 * @returns {void}
 */
function startApp() {
  const app = express();

  require('./src/setup')(app);
  require('./src/routes')(app);

  app.listen(8081, () => {
    console.log(`${name} listening on port 8081.`);
  });
}

startApp();
