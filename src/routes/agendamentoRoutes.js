import express from 'express';
//imporanto as funções do controller
import { criarAgendamento, listarAgendamentos} from '../controllers/agendamentoController.js';

const router = express.Router();

router.post('/', criarAgendamento);
router.get('/', listarAgendamentos);

export default router;