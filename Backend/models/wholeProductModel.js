const mongoose = require('mongoose');
const wholeProductSchma = new mongoose.Schema({
    name:String,
    price:Number,
    description:String,
    images:[{
        image:String
    }],
    category:String
})

const wholeProductModel= new mongoose.model("wholeProduct",wholeProductSchma);
module.exports=wholeProductModel;