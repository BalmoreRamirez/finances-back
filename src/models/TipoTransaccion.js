// src/models/TipoTransaccion.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const TipoTransaccion = sequelize.define('TipoTransaccion', {
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

export default TipoTransaccion;