const OrderModel = require('../models/orderModel');

//create order=/boonthchef/order

exports.createOrder =  async (req, res, next) => {

            const cartItems = req.body
            const amount= Number(cartItems.reduce((acc,item)=>(
               acc+ item.product.price * item.qty
            ),0)).toFixed(2);

            console.log("Amount",amount);
            const status="pending"
            const order = await OrderModel.create({cartItems,amount,status});
            console.log(order,'order')
            res.json({
                "success":"true",
                order
                
});
}
