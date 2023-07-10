import mongoose from 'mongoose';
import Product from '../mongodb/models/product.js';

import * as dotenv from 'dotenv';

dotenv.config();

const getAllProducts = async (req, res) => {
    const r = await Product.find({});
    res.json(r);
};
const getProductInfo = async (req, res) => {
    const productId = req.params.id;
    const r = await Product.findById(productId);
    res.json(r);
};

const getProductByOwner = async (req, res) => {};
const createProduct = async (req, res) => {
    try {
        const { name, description, price, quantity, owner, image } = req.body;

        // start a new session
        const session = await mongoose.startSession();
        session.startTransaction();
        console.log("session to create product started");

        const newProduct = await Product.create({
            name, 
            description,
            price, 
            quantity,
            owner,
            image,
        });

        await newProduct.save( {session} );
        await session.commitTransaction();

        console.log("transaction to create product committed");

        res.status(200).json({ message: 'Product saved successfully'});

    } catch(error) {
        res.status(500).json({ message: 'Could not save Product'});
    }
}

const removeProduct = async (req, res) => {};
const updateProduct = async (req, res) => {};


export {
    getAllProducts,
    getProductInfo,
    createProduct,
    getProductByOwner,
    removeProduct,
    updateProduct,
}