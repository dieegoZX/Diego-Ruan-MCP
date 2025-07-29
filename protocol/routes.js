const express = require('express');
const router = express.Router();

// Importando os modelos
const jeepModels = require('./Jeepmodels');
const ramModels = require('./Rammodels');

// Rota principal de verificação
router.get('/', (req, res) => {
  res.send('🚗 API MCP - Jeep & Ram pronta para uso!');
});

// Jeep
router.get('/jeep', (req, res) => {
  res.json(jeepModels);
});

// Ram (inclui Rampage)
router.get('/ram', (req, res) => {
  res.json(ramModels);
});

module.exports = router;
