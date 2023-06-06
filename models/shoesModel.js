const mongoose = require('mongoose');

const shoeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "A shoe must have a name"],
        unique: true
    },
    size: {
        type: String,
        required: [true, "A shoe must have a size"]
    },
    brand: {
        type: String,
        required: [true, "A shoe must have a brand"]
    },
})

const Shoe = mongoose.model("Shoe", shoeSchema, "Calcados");

module.exports = Shoe;
