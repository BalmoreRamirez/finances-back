import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Usuario from './Usuario.js';
import NombreCuenta from './NombreCuenta.js';

const Cuenta = sequelize.define('Cuenta', {
  usuario_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Usuario,
      key: 'id',
    },
    onDelete: 'CASCADE',
  },
  nombre_cuenta_id: {
    type: DataTypes.INTEGER,
    references: {
      model: NombreCuenta,
      key: 'id',
    },
    onDelete: 'SET NULL',
  },
  tipo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  saldo: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0.00,
  },
  descripcion: {
    type: DataTypes.STRING,
  },
});

export default Cuenta;