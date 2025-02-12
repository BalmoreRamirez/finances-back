import { Router } from 'express';
import { getCategorias, createCategoria } from '../controllers/categoriaController.js';

const router = Router();

router.get('/categorias', getCategorias);
router.post('/categorias', createCategoria);

export default router;