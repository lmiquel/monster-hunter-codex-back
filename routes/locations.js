const express = require("express");
const connection = require("../db");
const router = express.Router();

router.get("/locations/:monsterId", async (req, res) => {
  const { monsterId } = req.params;

  try {
    const locations = await connection.query(
      `SELECT * FROM locations l 
      JOIN monster_has_locations mhl ON mhl.locations_id = l.id 
      WHERE monster_id = ?`,
      [monsterId]
    );
    res.status(200).json(locations);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.get("/location/:locationid", async (req, res) => {
  const { locationid } = req.params;

  try {
    const location = await connection.query(
      `SELECT * FROM locations WHERE id = ?`,
      [locationid]
    );
    res.status(200).json(location);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

module.exports = router;
