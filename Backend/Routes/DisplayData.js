const express = require('express')
const router = express.Router()

router.get('/foodData',(req,res)=>{
    try{
        res.send([global.food_items,global.foodCategory])
    }
    catch(error){
        console.log(error.message)
        res.send("server Error")
    }
})

module.exports = router;
