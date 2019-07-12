const express = require("express");
const router = require("express").Router();
const apiControllerRoutes = require("./apicontroller");

router.use("/books", apiControllerRoutes);

module.exports = router;
