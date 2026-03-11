import express from "express";
import cors from "cors";
import servicosRoutes from "./routes/servicosRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());


app.use("/servicos", servicosRoutes);

app.get("/", (req, res) => {
  res.send("Backend Nails Design is running");
});

export default app;