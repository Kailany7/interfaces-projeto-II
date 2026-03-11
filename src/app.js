import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import funcionarioRoutes from "./routes/funcionarioRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/funcionarios", funcionarioRoutes);

app.get("/", (req, res) => {
  res.send("Backend Nails Design is running");
});

export default app;