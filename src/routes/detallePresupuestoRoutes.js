import { Router } from 'express';
import {getDetallePresupuestos,createDetallePresupuesto} from '../controllers/detallePresupuestoController.js';

const router = Router();

router.post('/detallePresupuesto', createDetallePresupuesto);
router.get('/detallePresupuesto', getDetallePresupuestos);

export default router;