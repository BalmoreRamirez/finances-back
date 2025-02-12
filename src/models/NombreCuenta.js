import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const NombreCuenta = sequelize.define('NombreCuenta', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.STRING,
  },
});

export default NombreCuenta;