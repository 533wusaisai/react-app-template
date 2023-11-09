/**
 * @description 接口路由配置
 */

const Router = require("@koa/router");
const router = new Router();
require("../db");

const { registerInfo,login } = require("../controllers/register");

// const { verifyToken, createToken } = require("../utils/jwt");

router.post("/info", registerInfo);
router.post("/login", registerInfo);

module.exports = router;
