
const express = require("express");
const connection = require("./config");

const port = 5000;
const app = express();

// We try to connect to the Database
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});