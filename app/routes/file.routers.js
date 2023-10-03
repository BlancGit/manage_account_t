module.exports = app => {
    const file_controller = require("../controller/file.controller")
    var router = require("express").Router();
    router.post("/upload", file_controller.upload);
    //console.log("file router");
    router.get("/:name", file_controller.download);
    app.use("/api/file", router);
};