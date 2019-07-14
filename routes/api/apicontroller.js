const express = require("express");
const router = require("express").Router();
// const modelController = require("../../controllers/controller")


// router.route("/")
//   .get(modelController.findAll)
//   .post(modelController.create);


router.post("/save", function(req, res){
console.log(req.body)
})

// router.route("/:id")
//   .get(modelController.findById)
//   .put(modelController.update)
//   .delete(modelController.remove);

module.exports = router;
