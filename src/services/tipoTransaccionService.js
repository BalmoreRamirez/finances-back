// src/services/tipoTransaccionService.js
import TipoTransaccion from "../models/TipoTransaccion.js";

export const getTipoTransacciones = async () => {
  return await TipoTransaccion.findAll();
};

export const createTipoTransaccion = async (data) => {
  return await TipoTransaccion.create(data);
};