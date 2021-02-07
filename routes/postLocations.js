const express = require("express");
const connection = require("../db");
const router = express.Router();

router.post("/location/:monsterName", async (req, res) => {
  const { monsterName } = req.params;

  try {
    const monsterNameQuery = `SELECT id FROM monster WHERE name = ?;`;
    const arrayId = await connection.query(monsterNameQuery, [monsterName]);

    const monsterId = arrayId[0].id;

    const locationQuery = `INSERT INTO monster_has_locations (monster_id, locations_id) VALUES (?, ?);`;
    const locationValues = [monsterId, req.body.locations_id];
    await connection.query(locationQuery, locationValues);

    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = router;
