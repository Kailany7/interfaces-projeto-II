import express from "express";
import cors from "cors";
import galeriaRoutes from "./routes/galeriaRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/galeria", galeriaRoutes); 

app.get("/", (req, res) => {
  res.send("Backend Nails Design is running");
});

export default app;