const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name:String,
    price:Number,
    Description:String,
    images:[{
        image:String
    }],
    category:String,
    numOfReviws:String,

});
const productModel = new mongoose.model('product',productSchema);
module.exports=productModel;