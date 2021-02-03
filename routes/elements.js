const express = require("express");
const connection = require("../db");
const router = express.Router();

router.get("/elements/:monsterId", async (req, res) => {
  const { monsterId } = req.params;

  try {
    const elements = await connection.query(
      `SELECT * FROM elements WHERE monster_id = ?`,
      [monsterId]
    );
    res.status(200).json(elements);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

module.exports = router;
