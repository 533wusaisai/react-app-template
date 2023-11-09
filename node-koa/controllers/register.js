/**
 * @description  控制器 接口校验
 */

const { Register } = require("../models/register");

const registerInfo = async (ctx) => {
  const userModel = new Register({
    userName: "admin",
    phone: 15801661330,
    password: "123456",
  });
  const dbBack = await userModel.save();
  ctx.body = dbBack;
};
const loginInfo = async (ctx) => {
  const userModel = new Register({
    userName: "admin",
    phone: 15801661330,
    password: "123456",
  });
  const dbBack = await userModel.save();
  ctx.body = dbBack;
};

module.exports = {
  registerInfo,
  loginInfo,
};
