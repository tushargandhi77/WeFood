const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

router.get('/foodData', async (req, res) => {
    try {
        const db = mongoose.connection.db;
        
        const foodItemsCollection = db.collection("food_items");
        const foodCategoryCollection = db.collection("foodCategory");

        // Fetch data from the database
        const foodItemsData = await foodItemsCollection.find({}).toArray();
        const foodCategoryData = await foodCategoryCollection.find({}).toArray();

        res.status(200).send({
            food_items: foodItemsData,
            foodCategory: foodCategoryData
        });
    } catch (error) {
        console.error('Server Error:', error.message);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;
