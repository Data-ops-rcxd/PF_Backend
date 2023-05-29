import { Schema, model } from 'mongoose';

const productsSchema = new Schema(
  {
    id: { type: String, required: true, unique: [true] },
    userid: { type: String, required: true, unique: [true] },
    categoria: { type: String, required: true },
    nom: { type: String, required: true },
    descripcion: { type: String, required: true },
    precio: { type: Number, required: true },
    calificacion: { type: Number, required: true }, //no se como ponerle el default en 0 (requerimientos funcionales 4)
    active: Boolean,
  },
  {
    timestamps: true,
  }
);

const productsModel = model('products', productsSchema);
export default productsModel;