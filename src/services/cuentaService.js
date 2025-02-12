import Cuenta from '../models/Cuenta.js';

class CuentaService {
  static async getAllCuentas() {
    return await Cuenta.findAll();
  }

  static async createCuenta(data) {
    return await Cuenta.create(data);
  }
}

export default CuentaService;