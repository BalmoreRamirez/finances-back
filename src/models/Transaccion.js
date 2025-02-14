import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Usuario from './Usuario.js';
import Categoria from './Categoria.js';
import Cuenta from './Cuenta.js';
import TipoTransaccion from './TipoTransaccion.js';
import Presupuesto from "./Presupuesto.js";

const Transaccion = sequelize.define('Transaccion', {
  usuario_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Usuario,
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
  tipoTransaccionId: {
    type: DataTypes.INTEGER,
    references: {
      model: TipoTransaccion,
      key: 'id',
    },
  },
  cuenta_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Cuenta,
      key: 'id',
    },
    onDelete: 'SET NULL',
  },
  presupuesto_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Presupuesto,
      key: 'id',
    },
    onDelete: 'SET NULL',
  },
  monto: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  descripcion: {
    type: DataTypes.STRING,
  },
});

Transaccion.belongsTo(Usuario, { foreignKey: 'usuario_id' });
Transaccion.belongsTo(Categoria, { foreignKey: 'categoria_id' });
Transaccion.belongsTo(Cuenta, { foreignKey: 'cuenta_id' });
Transaccion.belongsTo(TipoTransaccion, { foreignKey: 'tipoTransaccionId' });
TipoTransaccion.hasMany(Transaccion, { foreignKey: 'tipoTransaccionId' });

export default Transaccion;