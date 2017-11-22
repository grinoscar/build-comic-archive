/* eslint-disable global-require, no-param-reassign  */

/**
 * Sets up the routing in the application to the correct controllers
 *
 * @param {Object} app
 * The application object
 *
 * @returns {void}
 */
function setupRoutes(app) {
  const configs = {

  };

  /**
   * @swagger
   * /build-comic-archive/info:
   *   get:
   *     description: sends meta-data for a comic
   *     parameters:
   *       - name: id
   *         description: comic id
   *         in: query
   *         required: false
   *         type: number
   *       - name: name
   *         description: name of comic
   *         in: query
   *         required: false
   *         type: string
   *     responses:
   *       200:
   *         description: OK
   *         schema:
   *           type: object
   *           properties:
   *            items:
   *              type: array
   *              description: array of web comic info.
   *              comics:
   *                $ref: '#/definitions/comic'
   *       500:
   *         description: Unexpected error
   */
  // app.get('/build-comic-archive/info', require('./controllers/getComicInfo.js'));

  /**
   * @swagger
   * /build-comic-archive/build:
   *   get:
   *     description: returns an archived comic book file
   *     parameters:
   *       - name: id
   *         description: comic id
   *         in: query
   *         required: true
   *         type: number
   *       - name: fromDate
   *         description: earliest date to include
   *         in: query
   *         required: false
   *         type: string
   *       - name: toDate
   *         description: latest date to include
   *         in: query
   *         required: false
   *         type: string
   *     responses:
   *       200:
   *         description: OK
   *         schema:
   *           type: object
   *           properties:
   *            data:
   *              type: stream
   *              description: compressed application/file
   *       500:
   *         description: Unexpected error
   */
  // app.get('/build-comic-archive/build', require('./controllers/archiveComic.js'));

  /**
   * @swagger
   * /ping:
   *   get:
   *     description: Consul's health check for this product-api.
   *     responses:
   *       200:
   *         description: product-api is active.
   */
  app.get('*/ping', (request, response) => {
    response.sendStatus(200);
  });
}

module.exports = setupRoutes;
