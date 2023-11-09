// 1. 引入 mongodb 驱动包
const mongoose = require("mongoose");
const config = require("../config");
const log4js = require("../utils/log4");

/**
 * @description 数据库连接  创建 Schema
 */
const main = async () => {
  await mongoose.connect(`${config.localhostDB}`);
};
main()
  .then((res) => {
    log4js.info("数据库连接成功", res);
  })
  .catch((err) => {
    log4js.error(err);
    log4js.error("数据库连接错误");
  });
