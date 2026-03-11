import { Router } from "express";
import GaleriaController from "../controllers/galeriaController.js";
import uploadImagens from "../config/multer.js";

const routes = new Router();

routes.get("/", GaleriaController.index);

routes.post("/", uploadImagens.single("imagem"), GaleriaController.cadastrar);

routes.delete("/:id", GaleriaController.delete);

routes.put("/:id", GaleriaController.update);

export default routes;