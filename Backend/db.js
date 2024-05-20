const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://gofood:gofood123@cluster0.v1mhr0d.mongodb.net/Gofoodmern?retryWrites=true&w=majority';

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    }
};

module.exports = connectDB;
