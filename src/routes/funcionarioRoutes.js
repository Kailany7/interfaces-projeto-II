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

router.post("/", criarFuncionario);
router.get("/", listarFuncionarios);
router.get("/:id", buscarFuncionario);
router.put("/:id", atualizarFuncionario);
router.delete("/:id", deletarFuncionario);

export default router;