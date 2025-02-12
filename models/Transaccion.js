import { DataTypes } from 'sequelize';
import sequelize from '../db.js';
import Usuario from './Usuario.js';
import Categoria from './Categoria.js';
import Cuenta from './Cuenta.js';
import TipoTransaccion from './TipoTransaccion.js';

const Transaccion = sequelize.define('Transaccion', {
    monto: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    fecha: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    descripcion: {
        type: DataTypes.STRING,
    },
});

Transaccion.belongsTo(Usuario, { foreignKey: 'usuario_id', onDelete: 'CASCADE' });
Transaccion.belongsTo(Categoria, { foreignKey: 'categoria_id', onDelete: 'SET NULL' });
Transaccion.belongsTo(Cuenta, { foreignKey: 'cuenta_id', onDelete: 'CASCADE' });
Transaccion.belongsTo(TipoTransaccion, { foreignKey: 'tipo_id', onDelete: 'RESTRICT' });

export default Transaccion;