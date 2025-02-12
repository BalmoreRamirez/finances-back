import Usuario from '../models/Usuario.js';

class UsuarioService {
  static async getAllUsuarios() {
    return await Usuario.findAll();
  }

  static async createUsuario(data) {
    return await Usuario.create(data);
  }
}

export default UsuarioService;