// TERRY: this is his example... too complex.
// I would simplify this greatly.. but leave it for now.
const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter product nameeee']
    },
    quantity: {
        type: Number,
        required: true,
        default: 0
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    image:
    {
        type: String,
        required: false
    }
},  
{
    timestamps:  true
    })

const Product = mongoose.model('Product', productSchema);
module.exports = Product;