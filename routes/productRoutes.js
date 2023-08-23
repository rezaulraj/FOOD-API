const express = require('express');
const productController = require('./../controller/productController');

const router = express.Router();

// router.param('id', productController.checkID);

router
  .route('/')
  .get(productController.getProducts)
  .post(productController.createProduct);
router
  .route('/:id')
  .get(productController.getProduct)
  .patch(productController.updateProduct)
  .delete(productController.deleteProduct);

module.exports = router;
