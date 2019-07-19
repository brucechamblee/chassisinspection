const express = require('express');
const router = require('express').Router();
const modelController = require('../../controllers/controller');

// router.route("/")
//   .get(modelController.findAll)
//   .post(modelController.create);

router
  .route('/save')
  // console.log("This is API Controller" + req.body)
  .post(modelController.create);

// router.route("/:id")
//   .get(modelController.findById)
//   .put(modelController.update)
//   .delete(modelController.remove);

module.exports = router;
