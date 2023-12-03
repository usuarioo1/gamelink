const express = require("express");
const gamesRouter = require("./routes/gamesRoute");
const testbbdd = require("./config/database");
const userRouter = require("./routes/userRoute");
require("dotenv").config(); // para importar variables de entorno

// Traer MongoDB al servidor
//require("./config/database");

// Instanciamiento express
const app = express();
testbbdd();

// MIDDLEWARE

// Para que el servidor entienda JSON
app.use(express.json());
app.use(gamesRouter); // Ruta en el servidor
app.use(userRouter);

// Levantamiento del servidor
app.listen(process.env.PORT, () => {
  console.log(`Conectado con el servidor en el puerto: ${process.env.PORT}`);
});
