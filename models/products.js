const mongoose = require("mongoose")

const productsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }
})


const ProductSchema = mongoose.model("products", productsSchema)

module.exports = ProductSchema