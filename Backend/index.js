const express = require('express')
const app = express()
const port = 5000
const mongoDB = require('./db')
const cors = require('cors');

mongoDB()

app.get('/',(req,res)=>{
    res.send("Hello World")
})

const corsOptions = {
  origin: 'we-food-swart.vercel.app', // Your frontend's URL
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));


app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","we-food-swart.vercel.app")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin,X-Requested-with,Content-Type,Accept"
    );
    next();
})

app.use(express.json())
app.use('/api',require("./Routes/CreateUser"))
app.use('/api',require("./Routes/DisplayData"))
app.use('/api',require("./Routes/OrderData"))

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})
