import mongoose from "mongoose";

const OwnerSchema = new mongoose.Schema({    
    name: {type: String, required: false },
    email: {type: String, required: true},
    password: {type: String, required: true},
    // allProducts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
})

const ownerModel = mongoose.model('Owner', OwnerSchema);

export default ownerModel;