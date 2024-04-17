const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    _id: mongoose.Schema.ObjectId,
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
},
    { collection: "products", versionKey: false });

const products = mongoose.model('products', productSchema);
module.exports = products;
