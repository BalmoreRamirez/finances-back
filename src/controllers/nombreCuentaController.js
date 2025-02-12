import NombreCuentaService from '../services/nombreCuentaService.js';

export const getNombresCuentas = async (req, res) => {
  try {
    const nombresCuentas = await NombreCuentaService.getAllNombresCuentas();
    res.json(nombresCuentas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createNombreCuenta = async (req, res) => {
  try {
    const newNombreCuenta = await NombreCuentaService.createNombreCuenta(req.body);
    res.json(newNombreCuenta);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};