import express from "express";

import {
    getAllProducts,
    getProductInfo,
    createProduct,
    getProductByOwner,
    removeProduct,
    updateProduct,
} from '../controllers/products.controller.js';

const router = express.Router();

router.route('/').get(getAllProducts);
router.route('/:id').get(getProductInfo);
router.route('/').post(createProduct);
router.route('/:id').post(removeProduct);
router.route('/:id').patch(updateProduct);

export default router;