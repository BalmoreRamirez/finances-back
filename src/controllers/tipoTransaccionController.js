import { getTipoTransacciones, createTipoTransaccion } from '../services/tipoTransaccionService.js';

export const getAllTipoTransacciones = async (req, res) => {
  try {
    const tipoTransacciones = await getTipoTransacciones();
    res.json(tipoTransacciones);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const addTipoTransaccion = async (req, res) => {
  try {
    const tipoTransaccion = await createTipoTransaccion(req.body);
    res.status(201).json(tipoTransaccion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};