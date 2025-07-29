const express = require('express');
const router = express.Router();

// Importar os dados
const jeepModels = require('./Jeepmodels');
const ramModels = require('./Rammodels');

// Rota principal de teste
router.get('/', (req, res) => {
  res.send('🛠️ API Model Context Protocol - Ativa!');
});

// Rota para modelos Jeep
router.get('/jeep', (req, res) => {
  res.json(jeepModels);
});

// Rota para modelos Ram (incluindo Rampage)
router.get('/ram', (req, res) => {
  res.json(ramModels);
});

module.exports = router;
