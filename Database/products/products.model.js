import mongoose from "mongoose";

const productsSchema = mongoose.Schema(
  {
    userid: { type: String, required: [true] },
    categories: { type: Array },
    name: { type: String, required: [true] },
    description: { type: String },
    price: { type: Number, required: [true] },
    isDisable: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);
productsSchema.index({ name: "text" });
export default mongoose.model("products", productsSchema);
