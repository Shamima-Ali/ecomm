import mongoose from "mongoose";

const OwnerSchema = new mongoose.Schema({    
    name: {type: String, required: true },
    email: {type: String, required: false},
    phone: {type: Number, required: false},
    allProducts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
})

const ownerModel = mongoose.model('Owner', OwnerSchema);

export default ownerModel;