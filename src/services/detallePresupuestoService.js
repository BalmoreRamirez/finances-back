import DetallePresupuesto from '../models/DetallePresupuesto.js';

class DetallePresupuestoService {
  static async createDetallePresupuesto(data) {
    return await DetallePresupuesto.create(data);
  }

  static async getDetallePresupuestos() {
    return await DetallePresupuesto.findAll();
  }
}
export default DetallePresupuestoService;
