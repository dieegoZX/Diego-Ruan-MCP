const express = require("express");
const router = express.Router();

const jeepModels = require("../models/Jeepmodels");
const ramModels = require("../models/ramModels");

// Rota para /api/jeep
router.get("/jeep", (req, res) => {
  res.json(jeepModels);
});

// Rota para /api/ram
router.get("/ram", (req, res) => {
  res.json(ramModels);
});

module.exports = router;
