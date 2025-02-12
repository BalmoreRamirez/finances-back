import GastoDiarioService from '../services/gastoDiarioService.js';

export const getGastosDiarios = async (req, res) => {
  try {
    const gastosDiarios = await GastoDiarioService.getAllGastosDiarios();
    res.json(gastosDiarios);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createGastoDiario = async (req, res) => {
  try {
    const newGastoDiario = await GastoDiarioService.createGastoDiario(req.body);
    res.json(newGastoDiario);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};