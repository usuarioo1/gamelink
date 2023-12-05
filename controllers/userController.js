const User = require("../models/User");

const loginRegister = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();

    res
      .status(200)
      .json({ succes: true, message: "usuario creado", info: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error en el servidor");
  }
};

const getUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      message: "esta es tu lista de usuarios",
      success: true,
      info: users,
    });
  } catch (error) {
    res.status(500).json({ succes: false, message: error.message });
  }
};

const editUser = async (req, res) => {
  try {
    const { id } = req.params;
    const contain = req.body;
    const updateUser = await User.findByIdAndUpdate(id, contain, { new: true });
    res.json({ succes: false, message: error.message });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al editar usuario");
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const delUser = await User.findByAndDelete(id);
    res.json({ succes: true, message: "usuario eliminado", delUser });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al eliminar usuario");
  }
};

// const loginUser = (req, res) => {
//   try {
//     const {email,password} = req.body //saco la info de un usuario que me llegara, del body
//   } catch (error) {
//     res.status(500).json({ succes: false, message: error.message });
//   }
// };
module.exports = { loginRegister, getUser, editUser, deleteUser };
