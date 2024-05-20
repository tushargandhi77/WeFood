const express = require('express');
const router = express.Router();

router.get('/foodData', (req, res) => {
    try {
        if (global.food_items && global.foodCategory) {
            res.status(200).send({
                food_items: global.food_items,
                foodCategory: global.foodCategory
            });
        } else {
            console.warn('Data not available at the moment');
            res.status(503).send("Service Unavailable: Data not loaded");
        }
    } catch (error) {
        console.error('Server Error:', error.message);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;
