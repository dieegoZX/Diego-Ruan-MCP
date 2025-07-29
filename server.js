const express = require("express");
const app = express();

// Corrija aqui: caminho certo para protocol/routes.js
const routes = require("./protocol/routes");

const PORT = process.env.PORT || 3000;

app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("API rodando com sucesso 🚀");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
