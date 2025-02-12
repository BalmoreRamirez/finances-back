import { Router } from 'express';
import { getPresupuestos, createPresupuesto } from '../controllers/presupuestoController.js';

const router = Router();

router.get('/presupuestos', getPresupuestos);
router.post('/presupuestos', createPresupuesto);

export default router;