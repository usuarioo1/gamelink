const mongoose = require("mongoose");

//mongoose.set("strictQuery", true);

// mongoose
//   .connect(process.env.MONGODB)
//   .then(() => console.log("base de datos de gamelink conectada"));

const testbbdd = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("conectado bbdd");
  } catch (error) {
    console.error(error);
  }
};

module.exports = testbbdd;
