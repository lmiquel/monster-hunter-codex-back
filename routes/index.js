// const thingsRoutes = require('./things');
const monsters = require('./monsters')
const elements = require('./elements')
const ailments = require('./ailments')
const locations = require('./locations')

module.exports = (app) => {
  app.use("/api/get", monsters)
  app.use("/api/get", elements)
  app.use("/api/get", ailments)
  app.use("/api/get", locations)
}
