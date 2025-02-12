import UsuarioService from '../services/usuarioService.js';

export const getUsuarios = async (req, res) => {
  try {
    const usuarios = await UsuarioService.getAllUsuarios();
    res.json(usuarios);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createUsuario = async (req, res) => {
  try {
    const newUsuario = await UsuarioService.createUsuario(req.body);
    res.json(newUsuario);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};