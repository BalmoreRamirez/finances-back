import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

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