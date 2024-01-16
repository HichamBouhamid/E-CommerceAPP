const mongoose= require('mongoose');

const CartSchema = new mongoose.Schema({
    userId: {type: String, required: true},
    products: [{
        cartItem: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product"
        },
        quantity: {type: Number, required: true}
    }],

},{ timestamps: true});

module.exports = mongoose.model("Cart", CartSchema);