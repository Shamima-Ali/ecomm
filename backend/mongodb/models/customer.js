import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema({    
    name: {type: String, required: true },
    email: {type: String, required: false},
    phone: {type: Number, required: false},
    // allProperties: [{ type: mongoose.Schema.Types.ObjectId, red: 'Property' }],
    allProducts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
})

const customerModel = mongoose.model('Owner', CustomerSchema);

export default customerModel;