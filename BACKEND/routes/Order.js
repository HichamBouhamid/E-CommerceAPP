const router = require('express').Router();
const orderController = require('../controllers/orderController');

router.get('/', orderController.getUserOrders);

module.exports = router;