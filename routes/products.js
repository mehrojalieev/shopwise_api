const express = require("express")
const ProductSchema = require("../models/products")

const router = express.Router()


// Get All

router.get("/", async (req, res) => {
    try {
        const all_products = await ProductSchema.find()
        res.status(200).json(all_products)        
    } 
    catch (error) {
        res.status(500).json({message: error.message})    
    }

})

module.exports = router