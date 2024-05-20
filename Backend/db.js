const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://gofood:gofood123@cluster0.v1mhr0d.mongodb.net/Gofoodmern?retryWrites=true&w=majority';

const loadData = async () => {
    try {
        const db = mongoose.connection.db;
        
        const foodItemsCollection = db.collection("food_items");
        const foodItemsData = await foodItemsCollection.find({}).toArray();
        
        const foodCategoryCollection = db.collection("foodCategory");
        const foodCategoryData = await foodCategoryCollection.find({}).toArray();
        
        global.food_items = foodItemsData;
        global.foodCategory = foodCategoryData;

        console.log("Data loaded successfully");
    } catch (err) {
        console.error("Error loading data:", err);
    }
};

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');

        await loadData();
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    }
};

module.exports = mongoDB;
