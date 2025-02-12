import CuentaService from '../services/cuentaService.js';

export const getCuentas = async (req, res) => {
  try {
    const cuentas = await CuentaService.getAllCuentas();
    res.json(cuentas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createCuenta = async (req, res) => {
  try {
    const newCuenta = await CuentaService.createCuenta(req.body);
    res.json(newCuenta);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};