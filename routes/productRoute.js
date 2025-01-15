const express = require('express');
const router = express.Router();
const Product = require('../models/productModel');
const {getProducts, getProduct, createProduct} = require('../controllers/productController');

router.get('/', getProducts)
router.get('/:id', getProduct);
router.post('/', createProduct);

// router.post('/', async (req, res) => {
//     try {
//         const product = await Product.create(req.body);
//         res.status(200).json(product);
//     } catch (error) {
//         console.log(error.message);
//         res.status(500).json({message: error.message});
//     }
// }) 

module.exports = router;
