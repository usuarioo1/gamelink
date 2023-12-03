const User = require("../models/User");

const loginRegister = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();

    res.json({ succes: true, message: "usuario creado", info: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error en el servidor");
  }
};

const getUser = async (req, res) => {
  try {
    const users = await User.find();
    res.json({ success: true, info: users });
  } catch (error) {
    res.json({ succes: false, message: error.message });
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

module.exports = { loginRegister, getUser, editUser, deleteUser };
