import { DataTypes } from 'sequelize';
import sequelize from '../db.js';
import Usuario from './Usuario.js';
import Cuenta from './Cuenta.js';

const Presupuesto = sequelize.define('Presupuesto', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    monto: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    fecha_inicio: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    fecha_fin: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    descripcion: {
        type: DataTypes.STRING,
    },
});

Presupuesto.belongsTo(Usuario, { foreignKey: 'usuario_id', onDelete: 'CASCADE' });
Presupuesto.belongsTo(Cuenta, { foreignKey: 'cuenta_id', onDelete: 'CASCADE' });

export default Presupuesto;