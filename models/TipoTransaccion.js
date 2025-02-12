import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

const TipoTransaccion = sequelize.define('TipoTransaccion', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
});

export default TipoTransaccion;