const Product = require('../models/productModel');
const asyncHandler = require('express-async-handler')

// get all products
const getProducts = asyncHandler (async (req, res) => {
// const getProducts = (async (req, res) => {
        try {
        const products = await Product.find({});
        res.status(200).json(products);
        console.log('products', products);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
        // res.status(500).json({message: error.message});
    }
})

// get a single product
const getProduct = asyncHandler(async(req, res) =>{
// const getProduct = (async(req, res) =>{
        try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
        console.log('product', product);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

// create a product
const createProduct = asyncHandler(async(req, res) => {
// const createProduct = (async(req, res) => {
        try {
        const product = await Product.create(req.body)
        res.status(200).json(product);
        console.log('created product', product);     
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

module.exports = {
    getProducts,
    getProduct,
    createProduct,
};
