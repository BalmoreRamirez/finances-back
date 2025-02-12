import CategoriaService from '../services/categoriaService.js';

export const getCategorias = async (req, res) => {
  try {
    const categorias = await CategoriaService.getAllCategorias();
    res.json(categorias);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createCategoria = async (req, res) => {
  try {
    const newCategoria = await CategoriaService.createCategoria(req.body);
    res.json(newCategoria);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};