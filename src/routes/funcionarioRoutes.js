import express from "express";
import {
    criarFuncionario,
    listarFuncionarios,
    buscarFuncionario,
    atualizarFuncionario,
    deletarFuncionario
} from "../controllers/funcionarioController.js";

import { verificarToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", verificarToken, criarFuncionario);
router.get("/", verificarToken, listarFuncionarios);
router.get("/:id", verificarToken, buscarFuncionario);
router.put("/:id", verificarToken, atualizarFuncionario);
router.delete("/:id", verificarToken, deletarFuncionario);
export default router;