const express = require("express");
const gamesRouter = require("./routes/gamesRoute");
const testbbdd = require("./config/database");
const userRouter = require("./routes/userRoute");
const funkoRoute = require("./routes/funkoRoute");
const supportRoute = require("./routes/supportRoute")
require("dotenv").config(); // para importar variables de entorno
const cors = require('cors')

// Traer MongoDB al servidor
//require("./config/database");

// Instanciamiento express
const app = express();
testbbdd();



// Para que el servidor entienda JSON
app.use(cors()) // de esta manera se admiten todos los dominios
app.use(express.json());
app.use(gamesRouter); // Ruta en el servidor
app.use(userRouter);
app.use(funkoRoute);
app.use(supportRoute);


// Levantamiento del servidor
app.listen(process.env.PORT, () => {
  console.log(`Conectado con el servidor en el puerto: ${process.env.PORT}`);
});
