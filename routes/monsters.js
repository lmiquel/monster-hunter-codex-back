const express = require("express");
const connection = require("../db");
const router = express.Router();

router.get("/monsters", async (req, res) => {
  try {
    const monsters = await connection.query(`SELECT * FROM monster`);
    res.status(200).json(monsters);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.get("/monster/:monsterId", async (req, res) => {

    const { monsterId } = req.params;

    try {
      const monster = await connection.query(`SELECT * FROM monster WHERE id = ?`, [monsterId]);
      res.status(200).json(monster);
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  });

module.exports = router;
