const Product = require('../models/Order');

module.exports = {
    getUserOrders: async (reqn, res) => {
        const userId = reqn.params.id;

        try {
            const userOrders = await Order.find({userId})
            .populate({
                path: 'productId',
                select: "-description -product_location"
            }).exec();
            res.status(200).json(userOrders)
        } catch (error) {
           res.status(500).json(error)
        }
    }
}