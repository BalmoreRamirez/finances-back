import { DataTypes } from 'sequelize';
import sequelize from '../db.js';
import Presupuesto from './Presupuesto.js';

const VariacionPresupuesto = sequelize.define('VariacionPresupuesto', {
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

VariacionPresupuesto.belongsTo(Presupuesto, { foreignKey: 'presupuesto_id', onDelete: 'CASCADE' });

export default VariacionPresupuesto;