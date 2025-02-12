import { Router } from 'express';
import { getGastosDiarios, createGastoDiario } from '../controllers/gastoDiarioController.js';

const router = Router();

router.get('/gastos-diarios', getGastosDiarios);
router.post('/gastos-diarios', createGastoDiario);

export default router;