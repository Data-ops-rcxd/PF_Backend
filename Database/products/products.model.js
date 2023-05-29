import mongoose from "mongoose";

const productsSchema = mongoose.Schema(
  {
    userid: { type: String, required: [true] },
    categories: { type: Array, required: [true] },
    name: { type: String, required: [true] },
    description: { type: String, required: [true] },
    price: { type: Number, required: [true] },
    isDisable: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model('products', productsSchema);