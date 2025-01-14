const express = require("express");
const {
  registerUser,
  loginUser,
  getAllUsers,
  verifyToken,
  isAdmin
} = require("../controllers/authController");
const router = express.Router();

// Ruta para registrar usuario (no requiere autenticación)
router.post("/register", registerUser);

// Ruta para iniciar sesión (no requiere autenticación)
router.post("/login", loginUser);
router.get("/users", verifyToken, isAdmin, getAllUsers);


// Rutas protegidas que requieren verificación del token
// router.get("/protected-route", verifyToken, (req, res) => {
//   res.json({ message: "Acceso autorizado", user: req.user });
// });

module.exports = router;