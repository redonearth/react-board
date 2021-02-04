// import dotenv from "dotenv";
require("dotenv").config();
import Koa from "koa";
import Router from "koa-router";
import bodyParser from "koa-bodyparser";
import mongoose from "mongoose";
import api from "./api";
import jwtMiddleware from "./lib/jwtMiddleware";

// dotenv.config();
const { PORT, MONGO_URI } = process.env;

const app = new Koa();
const router = new Router();

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log("MongoDB Connected!"))
  .catch((e) => console.error(e));

router.use("/api", api.routes());

app.use(bodyParser());
app.use(jwtMiddleware);

app.use(router.routes()).use(router.allowedMethods());

const port = PORT || 5000;
app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
