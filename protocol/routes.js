const express = require('express')
const router = express.Router()
const jeepModels = require('../data/jeepModels')

// Rota inicial
router.get('/', (req, res) => {
  res.send('MCP Diego Ruan | Jeep MCP funcionando 🚗💨')
})

// Rota para obter todos os modelos da Jeep
router.get('/jeep', (req, res) => {
  res.json(jeepModels)
})

// Rota para obter um modelo específico por nome
router.get('/jeep/:nome', (req, res) => {
  const modelo = jeepModels.find(
    (m) => m.nome.toLowerCase() === req.params.nome.toLowerCase()
  )

  if (!modelo) return res.status(404).json({ erro: 'Modelo não encontrado' })

  res.json(modelo)
})

module.exports = router
