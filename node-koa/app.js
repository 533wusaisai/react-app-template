/**
 * @description 项目主文件
 */
const koa = require("koa");
const { koaBody } = require("koa-body");
const router = require("./routers");
const cors = require("@koa/cors");

const log4js = require("./utils/log4");

const app = new koa();

app.use(cors());
app.use(koaBody());
app.use(router.routes());

app.use(async (ctx, next) => {
  log4js.info(`get params:${JSON.stringify(ctx.request.query)}`);
  log4js.info(`post params:${JSON.stringify(ctx.request.body)}`);
});

app.listen(3000, () => {
  console.info("http://127.0.0.1:3000");
});
