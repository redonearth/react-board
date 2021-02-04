import Router from "koa-router";
import users from "./users/index";
import posts from "./posts/index";

const api = new Router();

api.use("/users", users.routes());
api.use("/posts", posts.routes());

export default api;
