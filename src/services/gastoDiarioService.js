import GastoDiario from '../models/GastoDiario.js';

class GastoDiarioService {
  static async getAllGastosDiarios() {
    return await GastoDiario.findAll();
  }

  static async createGastoDiario(data) {
    return await GastoDiario.create(data);
  }
}

export default GastoDiarioService;