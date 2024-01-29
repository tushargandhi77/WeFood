const mongoose = require('mongoose')
const mongoURI = 'mongodb+srv://gofood:gofood123@cluster0.v1mhr0d.mongodb.net/Gofoodmern?retryWrites=true&w=majority'
const mongoDB = async () => {
    await mongoose.connect(mongoURI, { useNewUrlParser: true }, (err, result) => {
        if (err) console.log("...", err)
        else {
            console.log('Connected');
            const fetched_data = mongoose.connection.db.collection("food_items");
            fetched_data.find({}).toArray(async function (err, data) {
                const footCategory = await mongoose.connection.db.collection("foodCategory");
                footCategory.find({}).toArray(function (err, catData) {
                    if (err) console.log(err)
                    else {
                        global.food_items = data;
                        global.foodCategory = catData;
                    }
                })
                // if (err) console.log(err)
                // else {
                //     global.food_items = data;

                // }

            })
        }
    })
}

module.exports = mongoDB



