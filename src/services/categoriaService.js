import Categoria from '../models/Categoria.js';

class CategoriaService {
  static async getAllCategorias() {
    return await Categoria.findAll();
  }

  static async createCategoria(data) {
    return await Categoria.create(data);
  }
}

export default CategoriaService;