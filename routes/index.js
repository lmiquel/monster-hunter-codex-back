// const thingsRoutes = require('./things');
const monsters = require("./monsters");
const elements = require("./elements");
const ailments = require("./ailments");
const locations = require("./locations");
const postMonster = require("./postMonster");
const postLocations = require("./postLocations");
const deleteMonster = require("./deleteMonster.js");

module.exports = (app) => {
  app.use("/api/get", monsters);
  app.use("/api/get", elements);
  app.use("/api/get", ailments);
  app.use("/api/get", locations);
  app.use("/api/post", postMonster, postLocations);
  app.use("/api/delete", deleteMonster);
};
