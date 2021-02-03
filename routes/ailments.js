const express = require("express");
const connection = require("../db");
const router = express.Router();

router.get("/ailments/:monsterId", async (req, res) => {
  const { monsterId } = req.params;

  try {
    const ailments = await connection.query(
      `SELECT * FROM ailments WHERE monster_id = ?`,
      [monsterId]
    );
    res.status(200).json(ailments);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

module.exports = router;
