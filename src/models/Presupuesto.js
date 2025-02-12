import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Usuario from './Usuario.js';
import Cuenta from './Cuenta.js';

const Presupuesto = sequelize.define('Presupuesto', {
  usuario_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Usuario,
      key: 'id',
    },
    onDelete: 'CASCADE',
  },
  cuenta_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Cuenta,
      key: 'id',
    },
    onDelete: 'CASCADE',
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  monto: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  fecha_inicio: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  fecha_fin: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.STRING,
  },
});

export default Presupuesto;