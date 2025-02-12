import PresupuestoService from '../services/presupuestoService.js';

export const getPresupuestos = async (req, res) => {
  try {
    const presupuestos = await PresupuestoService.getAllPresupuestos();
    res.json(presupuestos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createPresupuesto = async (req, res) => {
  try {
    const newPresupuesto = await PresupuestoService.createPresupuesto(req.body);
    res.json(newPresupuesto);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};