import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Presupuesto from './Presupuesto.js';

const GastoDiario = sequelize.define('GastoDiario', {
  presupuesto_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Presupuesto,
      key: 'id',
    },
    onDelete: 'CASCADE',
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  monto: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.STRING,
  },
});

export default GastoDiario;