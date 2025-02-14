import Cuenta from '../models/Cuenta.js';
import NombreCuenta from "../models/NombreCuenta.js";

class CuentaService {
  static async getAllCuentas() {
    return await Cuenta.findAll({
      attributes: ['id', 'saldo', 'usuario_id', 'nombre_cuenta_id', 'createdAt', 'updatedAt'],
      include:[
        {
          model: NombreCuenta,
          attributes: ['nombre'],
        },
      ]
    });
  }

  static async createCuenta(data) {
    return await Cuenta.create(data);
  }
}

export default CuentaService;