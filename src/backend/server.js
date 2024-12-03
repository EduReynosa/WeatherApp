const express = require("express");
const authRoutes = require("./routes/authRoutes");
const errorHandler = require("./middlewares/errorHandler");
const app = express();

// Middleware
app.use(express.json());

// Rutas
app.use("/api/auth", authRoutes);

// Manejo de errores
app.use(errorHandler);

// Servidor
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
