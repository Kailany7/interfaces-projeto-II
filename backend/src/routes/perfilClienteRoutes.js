import express from "express";
import {
  criarPerfil,
  listarPerfis,
  buscarPerfilPorId,
  atualizarPerfil,
  deletarPerfil
} from "../controllers/perfilClienteController.js";

import { verificarToken} from "../middlewares/authMiddleware.js";

const router = express.Router();

router.use(verificarToken);

router.post("/", criarPerfil);
router.get("/", listarPerfis);
router.get("/:id", buscarPerfilPorId);
router.put("/:id", atualizarPerfil);
router.delete("/:id", deletarPerfil);

export default router;