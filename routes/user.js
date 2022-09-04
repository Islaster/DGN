const express = require("express");
const router = express.Router();
const userCtrl = require("./../controllers/User");

router.post("/", userCtrl.create);
router.post("/login", userCtrl.login);

router.get("/check-token", userCtrl.checkToken);
router.put("/user   ", userCtrl.edit);
