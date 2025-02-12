import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

const Usuario = sequelize.define('Usuario', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    correo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    contrasena: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export default Usuario;