const express = require("express");
const router = require("express").Router();
const apiControllerRoutes = require("./apicontroller");

router.use("/inspection", apiControllerRoutes);

module.exports = router;
