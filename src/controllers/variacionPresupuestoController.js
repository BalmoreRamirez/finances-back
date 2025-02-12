import VariacionPresupuestoService from '../services/variacionPresupuestoService.js';

export const getVariacionesPresupuesto = async (req, res) => {
  try {
    const variacionesPresupuesto = await VariacionPresupuestoService.getAllVariacionesPresupuesto();
    res.json(variacionesPresupuesto);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createVariacionPresupuesto = async (req, res) => {
  try {
    const newVariacionPresupuesto = await VariacionPresupuestoService.createVariacionPresupuesto(req.body);
    res.json(newVariacionPresupuesto);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};