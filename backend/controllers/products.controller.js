import mongoose from 'mongoose';
import Product from '../mongodb/models/product.js';

const getAllProducts = async (req, res) => {};
const getProductInfo = async (req, res) => {};
const getProductByOwner = async (req, res) => {};
const createProduct = async (req, res) => {
    const { name, price, quantity, image, owner } = req.body;

    // start a new session
    const session = await mongoose.startSession();
    session.startTransaction();

    //22713

};
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