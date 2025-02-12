import { Router } from 'express';
import { getNombresCuentas, createNombreCuenta } from '../controllers/nombreCuentaController.js';

const router = Router();

router.get('/nombres-cuentas', getNombresCuentas);
router.post('/nombres-cuentas', createNombreCuenta);

export default router;