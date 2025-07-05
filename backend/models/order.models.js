import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  items: [
    {
      productId: String,
      quantity: Number,
    }
  ],
  totalAmount: Number,
  date: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Order", orderSchema);
