import mongoose from 'mongoose';

const ordersSchema =  mongoose.Schema(
  {
    userid: { type: String, required: [true] },
    state: {
      type: String,
      required: [true],
      enum: [
        'creado',
        'enviado',
        'aceptado',
        'recibido',
        'en direccion',
        'realizado',
      ],
    },
    productID: { type: String, required: [true]},
    comments: { type: String },
    rating: { type: Number },
    totalprice: {type: Number },
    isDisable: { type: Boolean, default: [false] },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('orders', ordersSchema);