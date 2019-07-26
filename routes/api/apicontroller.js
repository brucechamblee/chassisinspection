const express = require('express');
const router = require('express').Router();
const modelController = require('../../controllers/controller');

router.route('/').get(modelController.findAll);

router.route('/name/:query').get(modelController.findbyName);

router.route('/iepdata/:id').get(modelController.findById);

router
  .route('/save')

  .post(modelController.create);

// router.route("/:id")
//   .get(modelController.findById)
//   .put(modelController.update)
//   .delete(modelController.remove);

module.exports = router;
