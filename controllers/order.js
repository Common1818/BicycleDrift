const Order = require('../models/Order');
const User = require('../models/User');

exports.getOrderById = async (req, res, next, id) => {
   try {
      const order = await Order.findById(id);
      req.order = order;
      next();
   } catch (err) {
      console.error(err.message);
      return res.status(400).json({
         error: 'Order not found in DB',
      });
   }
};

exports.createOrder = async (req, res) => {
   const order = new Order(req.body);

   try {
      await order.save();
      res.json({
         order,
         messages: [{ msg: `Order was created Successfully` }],
      });
   } catch (err) {
      console.log(err);
      return res
         .status(400)
         .json({ errors: [{ msg: `Error creating order` }] });
   }
};

exports.getOrder = async (req, res) => {
   return res.json(req.order);
};

exports.deleteOrder = async (req, res) => {
   const order = req.order;
   res.json({
      order,
      messages: [{ msg: `Order was deleted Successfully` }],
   });
   try {
      await order.remove();
   } catch (err) {
      console.log(err);
      return res
         .status(400)
         .json({ errors: [{ msg: `Error deleting order` }] });
   }
};
