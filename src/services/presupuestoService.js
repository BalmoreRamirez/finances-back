import Presupuesto from '../models/Presupuesto.js';

class PresupuestoService {
  static async getAllPresupuestos() {
    return await Presupuesto.findAll();
  }

  static async createPresupuesto(data) {
    return await Presupuesto.create(data);
  }
}

export default PresupuestoService;