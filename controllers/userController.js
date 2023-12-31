const User = require("../models/User");
const crypto = require('crypto')

const loginRegister = async (req, res) => {//cambiar nombre a fn
  try {
    const useMail = await User.findOne({ mail: req.body.mail })
    if (useMail) {
      throw new Error('este correo esta en uso')
    }
    const newUser = new User(req.body); //crea un usuario con los valores que pase
    newUser.encriptarPassword(req.body.password);
    await newUser.save();


    // let { mail, password} = req.body
    // const salt = "docCrypt"

    // let crypoUser = cryto.pbkdf2Sync(req.body.password, salt, 10000, 10, 'sha-512').toString('hex')
    // newUser.password = crypoUser;

    //encriptar contraseña
    //crear token y almacenar cookie ** mas segura cookie ** guardar en localstorage
    res.status(200)
      .json({ succes: true, message: "usuario creado", info: newUser, token: newUser.generadorDeToken });
  } catch (error) {
    console.error(error);
    res.status(500).json({ succes: false, message: "Error en el servidor", error: error.message });
  }
};


//validar si existe y si existe que muestre el usuario**
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

const getProfile = async(req,res) => {
  try {
    const {id} = req.params;
    const getInfouser = await User.findById(id).select('-password -salt')
    res.json({success: true,
      info: getInfouser})
  } catch (error) {
    res.status(500).json({ succes: false, message: error.message });
  }
}

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

const loginUser = async (req, res) => {
  try {
    const { mail, password } = req.body; //saco la info de un usuario que me llegara, del body
    const user = await User.findOne({ mail }); //buscando email en bbdd mongodb
    const pass = user.password;

    if (!user) {
      throw new Error("usuario no existe");
    }

    const verificarPassword = user.validarPassword(password, user.salt, user.password)
    if (!verificarPassword) {
      throw new Error('email o contraseña invalidos, verificar por favor')
    }
    res.json({
      succes: true,
      message: "ingreso con exito",
      token: user.generadorDeToken()
    });
  } catch (error) {
    res.status(500).json({ succes: false, message: error.message });
  }
};

const getVerifyUser = async(req,res) => {
  try {
    const {id} = req.auth;
    const getInfouser = await User.findById(id).select('-password -salt')
    res.json({success: true,
      info: getInfouser})
  } catch (error) {
    res.status(500).json({ succes: false, message: error.message });
  }
}
module.exports = { loginRegister, getUser, editUser, deleteUser, loginUser, getProfile, getVerifyUser };
