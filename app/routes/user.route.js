const authJwt = require("../middleware/auth.jwt");
module.exports = (app) => {
    const user_controller = require("../controller/user.controller");
    var router = require("express").Router();
    router.get("/:us", user_controller.validUsername);
    router.post("/signup", user_controller.createNewUser);
    router.post("/login", user_controller.login);
    router.get("/", authJwt, user_controller.getAllUsers);
    router.put("/:id", authJwt, user_controller.updateUserCrtl);
    app.use("/api/auth", router);
};