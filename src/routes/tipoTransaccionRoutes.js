// src/routes/tipoTransaccionRoutes.js
import { Router } from 'express';
import { getAllTipoTransacciones, addTipoTransaccion } from '../controllers/tipoTransaccionController.js';

const router = Router();

router.get('/tipoTransacciones', getAllTipoTransacciones);
router.post('/tipoTransacciones', addTipoTransaccion);

export default router;