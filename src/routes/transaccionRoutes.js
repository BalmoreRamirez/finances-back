import { Router } from 'express';
import { getTransacciones, createTransaccion } from '../controllers/transaccionController.js';

const router = Router();

router.get('/transacciones', getTransacciones);
router.post('/transacciones', createTransaccion);

export default router;