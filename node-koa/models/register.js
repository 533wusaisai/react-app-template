/**
 * @description 创建 注册 应用
 */

const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
  userName: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  phone: {
    type: Number,
    require: true,
  },
});

const loginSchema = new mongoose.Schema({
  userName: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

module.exports = {
  Register: mongoose.model("Register", registerSchema),
  Login: mongoose.model("Login", loginSchema),
};
