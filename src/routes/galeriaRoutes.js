import { Router } from "express";
import GaleriaController from "../controllers/galeriaController.js";
import uploadImagens from "../config/multer.js";

const routes = new Router();

routes.get("/galeria", GaleriaController.index);

routes.post("/galeria", uploadImagens.single("imagem"), GaleriaController.cadastrar);

routes.delete("/galeria/:id", GaleriaController.delete);

routes.put("/galeria/:id", GaleriaController.update);

export default routes;