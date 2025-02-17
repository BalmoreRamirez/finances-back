import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Presupuesto from './Presupuesto.js';
import Categoria from "./Categoria.js";

const VariacionPresupuesto = sequelize.define('VariacionPresupuesto', {
  presupuesto_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Presupuesto,
      key: 'id',
    },
    onDelete: 'CASCADE',
  },
  categoria_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Categoria,
      key: 'id',
    },
    onDelete: 'SET NULL',
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

export default VariacionPresupuesto;