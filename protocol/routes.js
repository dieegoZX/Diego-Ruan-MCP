const express = require("express");
const router = express.Router();

const jeepModels = require("./Jeepmodels");
const ramModels = require("./ramModels"); // <-- Nome correto com r minúsculo e M maiúsculo

// Rota para /jeep
router.get("/jeep", (req, res) => {
  res.json(jeepModels);
});

// Rota para /ram
router.get("/ram", (req, res) => {
  res.json(ramModels);
});

module.exports = router;
