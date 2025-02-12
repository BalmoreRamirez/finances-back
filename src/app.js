import app from './config/server.js';
import sequelize from './config/database.js';
import categoriaRoutes from './routes/categoriaRoutes.js';
import cuentaRoutes from "./routes/cuentaRoutes.js";
import gastoDiarioRoutes from "./routes/gastoDiarioRoutes.js";
import nombreCuentaRoutes from "./routes/nombreCuentaRoutes.js";
import presupuestoRoutes from './routes/presupuestoRoutes.js';
import transaccionRoutes from "./routes/transaccionRoutes.js";
import usuarioRoutes from './routes/usuarioRoutes.js';
import variacionPresupuestoRoutes from './routes/variacionPresupuestoRoutes.js';
import tipoTransaccion from "./routes/tipoTransaccionRoutes.js";

const port = process.env.PORT || 3002;
app.use('/api', categoriaRoutes);
app.use('/api', cuentaRoutes);
app.use('/api', gastoDiarioRoutes);
app.use('/api', nombreCuentaRoutes);
app.use('/api', presupuestoRoutes);
app.use('/api', transaccionRoutes);
app.use('/api', usuarioRoutes);
app.use('/api', variacionPresupuestoRoutes);
app.use('/api', tipoTransaccion);


sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});