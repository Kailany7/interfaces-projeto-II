import express from "express";
import {
  listarComentarios,
  criarComentario,
  deletarComentario,
} from "../controllers/comentarioController.js";
import { verificarToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", listarComentarios);

router.use(verificarToken);

router.post("/", criarComentario);
router.delete("/:id", deletarComentario);

export default router;
