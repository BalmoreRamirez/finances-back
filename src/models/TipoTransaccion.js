// src/models/TipoTransaccion.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const TipoTransaccion = sequelize.define('TipoTransaccion', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default TipoTransaccion;