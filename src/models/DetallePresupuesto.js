import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Presupuesto from './Presupuesto.js';
import Categoria from './Categoria.js';

const DetallePresupuesto = sequelize.define("DetallePresupuesto", {
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
  nombre: {
    type: DataTypes.STRING,
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
DetallePresupuesto.belongsTo(Categoria, { foreignKey: 'categoria_id' });
DetallePresupuesto.belongsTo(Presupuesto, { foreignKey: 'presupuesto_id' });
export default DetallePresupuesto;