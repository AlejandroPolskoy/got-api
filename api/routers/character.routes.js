const express = require("express");

const router = express.Router();

const { getCharacterByID, getCharacters } = require("../controllers/characters.controller");

router.get("/:id", getCharacterByID);
router.get("/", getCharacters);

module.exports = router;