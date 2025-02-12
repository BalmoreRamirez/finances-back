import VariacionPresupuesto from '../models/VariacionPresupuesto.js';

class VariacionPresupuestoService {
  static async getAllVariacionesPresupuesto() {
    return await VariacionPresupuesto.findAll();
  }

  static async createVariacionPresupuesto(data) {
    return await VariacionPresupuesto.create(data);
  }
}

export default VariacionPresupuestoService;