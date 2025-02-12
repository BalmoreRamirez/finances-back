import { DataTypes } from 'sequelize';
import sequelize from '../db.js';
import Usuario from './Usuario.js';
import NombreCuenta from './NombreCuenta.js';

const Cuenta = sequelize.define('Cuenta', {
    tipo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    saldo: {
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: 0.00,
    },
    descripcion: {
        type: DataTypes.STRING,
    },
});

Cuenta.belongsTo(Usuario, { foreignKey: 'usuario_id', onDelete: 'CASCADE' });
Cuenta.belongsTo(NombreCuenta, { foreignKey: 'nombre_cuenta_id', onDelete: 'SET NULL' });

export default Cuenta;