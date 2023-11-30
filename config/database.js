const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

mongoose
  .connect(process.env.MONGODB)
  .then(() => console.log("base de datos de gamelink conectada"));
