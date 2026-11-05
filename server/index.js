
import "dotenv/config";
import express from "express";

const app = express();
app.use(express.json());

// Rota GET /api/health solicitada na atividade
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", app: "Center Maq", hora: new Date().toISOString() });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`);
});