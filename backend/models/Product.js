const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please enter product title"],
    },
    description: {
        type: String,
        required: [true, "Please enter product description"],
    },
    status: {
        type: String,
        default: "Processing",
    },
    quantity: {
        type: Number,
        default: 1,
    },
    price: {
        type: Number,
        required: [true, "Please enter product price"],
    },
    category: {
        type: String,
        required: [true, "Please enter product category"]
    },
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;