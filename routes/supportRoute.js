const express = require("express")
const supportRouter = express.Router();
const {getMessages, getMessageById, sendMessage } = require("../controllers/supportController")

supportRouter.route("/sendmessage").post(sendMessage)
supportRouter.route("/messages").get(getMessages)
supportRouter.route("/messages/:id").get(getMessageById)


module.exports = supportRouter; 
