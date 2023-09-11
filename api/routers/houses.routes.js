const express = require("express");

const router = express.Router();

const { getHouses, getHouseByID} = require("../controllers/houses.controller");

router.get("/:id", getHouseByID);
router.get("/", getHouses);

module.exports = router;