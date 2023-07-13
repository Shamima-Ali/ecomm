import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({    
    name: {type: String, required: true },
    description:  {type: String, required: false},
    price: {type: Number, required: true},
    quantity: {type: Number, required: true},
    image: {type: String, required: false},
    owner: {type: String, required: false},
    // owner: { type: mongoose.Schema.Types.ObjectId, ref: 'Owner' },
})

const productModel = mongoose.model('Product', ProductSchema);

export default productModel;