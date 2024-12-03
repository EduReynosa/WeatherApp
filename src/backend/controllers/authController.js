const { findUserByEmail, createUser } = require("../models/userModel");

const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await findUserByEmail(email);
    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Credenciales inválidas" });
    }
    res.json({ message: "¡Inicio de sesión exitoso!" });
  } catch (err) {
    next(err);
  }
};

const register = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    await createUser(email, password);
    res.status(201).json({ message: "¡Usuario registrado exitosamente!" });
  } catch (err) {
    next(err);
  }
};

const resetPassword = async (req, res, next) => {
  const { email } = req.body;
  try {
    const user = await findUserByEmail(email);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    // Lógica para enviar correo omitida
    res.json({ message: "Correo para restablecer contraseña enviado" });
  } catch (err) {
    next(err);
  }
};

module.exports = { login, register, resetPassword };
