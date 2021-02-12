// const thingsRoutes = require('./things');
const monsters = require("./monsters");
const elements = require("./elements");
const ailments = require("./ailments");
const locations = require("./locations");
const postMonster = require("./postMonster");
const postLocations = require("./postLocations");
const deleteMonster = require("./deleteMonster.js");
const modifyMonster = require("./modifyMonster");

module.exports = (app) => {
  app.use("/api/get", monsters, elements, ailments, locations);
  app.use("/api/post", postMonster, postLocations);
  app.use("/api/delete", deleteMonster);
  app.use("/api/put", modifyMonster);
};
