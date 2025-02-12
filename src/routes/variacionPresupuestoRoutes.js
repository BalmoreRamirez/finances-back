import { Router } from 'express';
import { getVariacionesPresupuesto, createVariacionPresupuesto } from '../controllers/variacionPresupuestoController.js';

const router = Router();

router.get('/variaciones-presupuesto', getVariacionesPresupuesto);
router.post('/variaciones-presupuesto', createVariacionPresupuesto);

export default router;