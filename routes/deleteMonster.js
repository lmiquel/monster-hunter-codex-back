const express = require("express");
const connection = require("../db");
const router = express.Router();

router.delete("/monster/:monsterId", async (req, res) => {
  const { monsterId } = req.params;

  try {
    const elementQueryDelete = `DELETE FROM elements WHERE monster_id = ?;`;
    await connection.query(elementQueryDelete, [monsterId]);

    const ailmentQueryDelete = `DELETE FROM ailments WHERE monster_id = ?;`;
    await connection.query(ailmentQueryDelete, [monsterId]);

    const locationsQueryDelete = `DELETE FROM monster_has_locations WHERE monster_id = ?;`;
    await connection.query(locationsQueryDelete, [monsterId]);

    const monsterQueryDelete = `DELETE FROM monster WHERE id = ?;`;
    await connection.query(monsterQueryDelete, [monsterId]);

    res.sendStatus(200);
  } catch(error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = router;