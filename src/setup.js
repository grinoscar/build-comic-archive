const bodyParser = require('body-parser');
const fs = require('fs');
const { name } = require('../package.json');

/**
 * Defines how logging will occur in the application
 * @param {Object} app - The application object
 */
function setupAccessLogging(app) {
  const logDirectory = './var/log/access.log';

  // ensure log directory exists
  if (!fs.existsSync(logDirectory)) {
    fs.mkdirSync(logDirectory);
  }

  // Set up to access log. Use "combined" format plus response time
  // app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent" - :response-time ms', {
  //   stream: fileStreamRotator.getStream({
  //     date_format: 'YYYYMMDD',
  //     filename: `${logDirectory}/${name}.access.%DATE%.log`,
  //     frequency: 'daily',
  //     verbose: false,
  //   }),
  // }));
}

/**
 * Define Cross-Origin Resource Sharing headers and exposed headers
 * @param {Object} request - The incoming request into the application
 * @param {Object} response - The response object outbound from the application
 * @param {Function} next - Express middleware function to continue middleware chaining
 */
function setHeaders(request, response, next) {
  next();
}

/**
 * Initialize express app
 * @param {Object} app - The application object
 */
function setupApp(app) {
  // Setup logging
  // setupAccessLogging(app);

  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: true }));

  // parse application/json and application/vnd.api+json as json
  app.use(bodyParser.json());
  app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

  // setup headers for interaction with the API
  app.use(setHeaders);
}

module.exports = setupApp;
