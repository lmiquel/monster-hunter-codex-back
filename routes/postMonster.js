const express = require("express");
const connection = require("../db");
const router = express.Router();

router.post("/new-monster", async (req, res) => {

    try{

    const { newMonster } = req.body;

    const monsterQuery = `INSERT INTO 
    monster (
        name,
        picture,
        severable_tail
    ) VALUES (?, ?, ?);`;
    const monsterValues = [
        newMonster.name,
        newMonster.picture,
        newMonster.severable_tail
    ];
    const {insertId: monster_id} = await connection.query(monsterQuery, monsterValues);

    const elementsQuery = `INSERT INTO 
    elements (
        fire,
        water,
        thunder,
        ice,
        dragon,
        monster_id
    ) VALUES (?, ?, ?, ?, ?, ?);`;
    const elementsValues = [
        newMonster.fire,
        newMonster.water,
        newMonster.thunder,
        newMonster.ice,
        newMonster.dragon,
        monster_id
    ];

    await connection.query(elementsQuery, elementsValues);

    const ailmentsQuery = `INSERT INTO 
    ailments (
        poison,
        sleep,
        paralysis,
        blast,
        stun,
        monster_id
    ) VALUES (?, ?, ?, ?, ?, ?);`;
    const ailmentsValues = [
        newMonster.poison,
        newMonster.sleep,
        newMonster.paralysis,
        newMonster.blast,
        newMonster.stun,
        monster_id
    ];

    await connection.query(ailmentsQuery, ailmentsValues);

    res.sendStatus(200);
}

catch(error){
    console.log(error);
    res.status(500).send(error);
}});

module.exports = router;