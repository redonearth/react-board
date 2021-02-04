import Router from "koa-router";
import * as usersCtrl from "./users.ctrl";

const users = new Router();

users.get("/auth", usersCtrl.auth);
users.post("/register", usersCtrl.register);
users.post("/login", usersCtrl.login);
users.get("/logout", usersCtrl.logout);

export default users;
