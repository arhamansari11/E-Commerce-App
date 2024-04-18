const express = require('express');
const Router = express.Router();
const mongoose = require('mongoose');
const Products = require("../models/products");

// POST DATA 

Router.post('/addpd', async (req, res) => {
    try {
        const newProducts = new Products({
            _id: new mongoose.Types.ObjectId(),
            title: req.body.title,
            description: req.body.description,
            price: req.body.price
        });
        const result = await newProducts.save();
        res.json(result);
        console.log(result);
    } catch (error) {
        res.status(500).json(error.message || "Server Error");
    }
});

module.exports = Router;
