const express = require("express");
const app = express();
const routes = require("./routes/route");

const PORT = process.env.PORT || 3000;

app.use("/api", routes); // base path "/api"

app.get("/", (req, res) => {
  res.send("API de Modelos Jeep e Ram rodando! 🚗");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
