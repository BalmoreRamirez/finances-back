import { Router } from 'express';
import { getCuentas, createCuenta } from '../controllers/cuentaController.js';

const router = Router();

router.get('/cuentas', getCuentas);
router.post('/cuentas', createCuenta);

export default router;