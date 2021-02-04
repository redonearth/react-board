import Router from "koa-router";
import users from "./users";
import posts from "./posts";

const api = new Router();

api.use("/users", users.routes());
api.use("/posts", posts.routes());

export default api;
