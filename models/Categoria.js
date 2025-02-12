import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

const Categoria = sequelize.define('Categoria', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descripcion: {
        type: DataTypes.STRING,
    },
});

export default Categoria;