const express = require("express");
const connection = require("../db");
const router = express.Router();

router.put("/monster/:monsterId", async (req, res) => {
  const { monsterId } = req.params;

  try {
    const {monster} = req.body;
    const monsterToModifyQuery = `UPDATE monster SET ? WHERE id = ?;`;
    const monsterToModifyValues = { ...monster };
    await connection.query(monsterToModifyQuery, [
      monsterToModifyValues,
      monsterId,
    ]);

    const {ailments} = req.body.monster;
    const ailmentsToModifyQuery = `UPDATE ailments SET ? WHERE monster_id = ?;`;
    const ailmentsToModifyValues = {... ailments};
    await connection.query(ailmentsToModifyQuery, [
      ailmentsToModifyValues,
      monsterId,
    ]);

    const {elements} = req.body.monster;
    const elementsToModifyQuery = `UPDATE elements SET ? WHERE monster_id = ?;`;
    const elementsToModifyValues = {... elements};
    await connection.query(elementsToModifyQuery, [
      elementsToModifyValues,
      monsterId,
    ]);

    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = router;
