import { Schema, model } from 'mongoose';

const ordersSchema = new Schema(
  {
    id: { type: String, required: true, unique: [true] },
    user_id: { type: String, required: true },
    restaurante_id: { type: String, required: true },
    state: {
      type: String,
      required: true,
      enum: [
        'creado',
        'enviado',
        'aceptado',
        'recibido',
        'en direccion',
        'realizado',
      ],
    },
    calificacion: { type: Number, required: true },
    comentarios: { type: String, required: false },//realmente no se como quedaria (Update)
    active: Boolean,
  },
  {
    timestamps: true,
  }
);

const ordersModel = model('orders', ordersSchema);
export default ordersModel;