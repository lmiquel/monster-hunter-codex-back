const express = require("express");
const connection = require("../db");
const router = express.Router();

router.post("/new-monster", async (req, res) => {

    try{

    const monsterQuery = `INSERT INTO 
    monster (
        name,
        picture,
        severable_tail
    ) VALUES (?, ?, ?);`;
    const monsterValues = [
        req.body.name,
        req.body.picture,
        req.body.severable_tail
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
        req.body.fire,
        req.body.water,
        req.body.thunder,
        req.body.ice,
        req.body.dragon,
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
        req.body.poison,
        req.body.sleep,
        req.body.paralysis,
        req.body.blast,
        req.body.stun,
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