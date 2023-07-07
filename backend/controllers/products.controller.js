import mongoose from 'mongoose';
import Product from '../mongodb/models/product.js';

import * as dotenv from 'dotenv';

dotenv.config();

const getAllProducts = async (req, res) => {
    console.log("them books ");
    res.json({"hi": "this"});
};
const getProductInfo = async (req, res) => {};
const getProductByOwner = async (req, res) => {};
const createProduct = async (req, res) => {
    console.log("in createProduct");
    try {
        const { name, price, quantity, owner, image } = req.body;
        // console.log("name", name);
        // console.log("price", price);
        // console.log("quantity", quantity);
        // console.log("owner", owner);
        // console.log("image", image);

        // start a new session
        const session = await mongoose.startSession();
        session.startTransaction();
        console.log("session to create product started");

        const newProduct = await Product.create({
            name, 
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
        console.log(error);
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