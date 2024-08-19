const ProductModel = require('../models/productModel')
const wholeProductModel = require('../models/wholeProductModel')

// Get all products - GET /boonthechef/products
exports.getProducts = async (req, res, next) => {
 
    try {
        const category = req.query.category;
        const products = await ProductModel.find(category ? { category } : {});
        res.json({
            success: true,
            products
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get single product - GET /boonthechef/product/:id
exports.getSingleProduct = async (req, res, next) => {
    try {
        const product = await ProductModel.findById(req.params.id);
        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Product not found'
            });
        }
        res.json({
            success: true,
            product
        });
    } catch (error) {
        console.error(error); // Log error for debugging
        if (error.kind === 'ObjectId') {
            return res.status(404).json({
                success: false,
                message: 'Product not found'
            });
        }
        res.status(500).json({
            success: false,
            message: 'Server error. Please try again later.'
        });
    }
};

exports.getWholeProduct= async (req,res,next)=>{
    try {
        const query = req.query.keyword?{name:{
            $regex : req.query.keyword,
            $options : 'i'
        }}:{}
        const wholeProduct= await wholeProductModel.find(query)
        res.json({
            success:true,
            wholeProduct
        })
    } catch (error) {
        
    }
}