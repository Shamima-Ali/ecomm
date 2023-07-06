import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({    
    name: {type: String, required: true },
    price: {type: Integer, required: true},
    quantity: {type: Number, required: true},
    image: {type: String, required: true},
    // owner: {type: String, required: true},
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'Owner' },
})

const productModel = mongoose.model('Product', ProductSchema);

export default productModel;