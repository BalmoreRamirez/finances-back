import Transaccion from '../models/Transaccion.js';
import Categoria from "../models/Categoria.js";
import TipoTransaccion from "../models/TipoTransaccion.js";
import Cuenta from '../models/Cuenta.js';
import NombreCuenta from '../models/NombreCuenta.js';

class TransaccionService {
  static async getAllTransacciones() {
    return await Transaccion.findAll({
      attributes: ['id', 'usuario_id', 'categoria_id', 'tipoTransaccionId', 'cuenta_id','presupuesto_id', 'monto', 'fecha', 'descripcion', 'createdAt', 'updatedAt'],
      include: [
        {
          model: Categoria,
          attributes: ['nombre'],
        },
        {
          model: TipoTransaccion,
          attributes: ['nombre'],
        },
        {
          model:Cuenta,
          attributes:['cuenta_id'],
          include: [
            {
              model: NombreCuenta,
              attributes: ['nombre'],
            },
          ]
        }
      ],
    });
  }

  static async createTransaccion(data) {
    return await Transaccion.create(data);
  }
}

export default TransaccionService;