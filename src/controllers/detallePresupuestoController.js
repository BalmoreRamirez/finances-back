import detallePresupuestoService from '../services/detallePresupuestoService.js';

export const getDetallePresupuestos = async (req, res) => {
  try {
    const detallePresupuestos = await detallePresupuestoService.getDetallePresupuestos();
    res.json(detallePresupuestos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
export const createDetallePresupuesto = async (req, res) => {
  try {
    const newDetallePresupuesto = await detallePresupuestoService.createDetallePresupuesto(req.body);
    res.json(newDetallePresupuesto);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}