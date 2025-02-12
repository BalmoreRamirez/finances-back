import TransaccionService from '../services/transaccionService.js';

export const getTransacciones = async (req, res) => {
  try {
    const transacciones = await TransaccionService.getAllTransacciones();
    res.json(transacciones);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createTransaccion = async (req, res) => {
  try {
    const newTransaccion = await TransaccionService.createTransaccion(req.body);
    res.json(newTransaccion);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};