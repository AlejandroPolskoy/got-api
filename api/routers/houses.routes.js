const express = require("express");

const router = express.Router();

const { getHouses, getHouseByID, getHouseByName} = require("../controllers/houses.controller");

router.get("/:id", getHouseByID);
router.get("/", getHouses);

module.exports = router;