import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const NombreCuenta = sequelize.define('NombreCuenta', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default NombreCuenta;