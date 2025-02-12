import NombreCuenta from '../models/NombreCuenta.js';

class NombreCuentaService {
  static async getAllNombresCuentas() {
    return await NombreCuenta.findAll();
  }

  static async createNombreCuenta(data) {
    return await NombreCuenta.create(data);
  }
}

export default NombreCuentaService;