import { DataTypes } from 'sequelize';
import sequelize from '../db.js';
import Presupuesto from './Presupuesto.js';

const GastoDiario = sequelize.define('GastoDiario', {
    fecha: {
        type: DataTypes.DATE,
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

GastoDiario.belongsTo(Presupuesto, { foreignKey: 'presupuesto_id', onDelete: 'CASCADE' });

export default GastoDiario;