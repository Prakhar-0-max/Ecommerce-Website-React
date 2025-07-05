import Order from "../models/order.models.js";

export const placeOrder = async (req, res) => {
  try {
    const { userId, items, totalAmount } = req.body;
    const order = await Order.create({ userId, items, totalAmount });
    res.status(201).json({ message: "Order placed successfully", order });
  } catch (err) {
    res.status(500).json({ message: "Order failed", error: err.message });
  }
};
export default placeOrder