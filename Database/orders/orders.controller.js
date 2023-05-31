import ordersModel from "./orders.model.js";
// jwt key and imports.
import jwt from "jsonwebtoken";
const secretKey = 'pepeconpan';

//create
export async function createOrder(req, res) {
  try {
    const token = req.headers.authorization;
    let decode
    try{
      decode = jwt.verify(token, secretKey);
    }catch{
      return res.status(401).json("invalid signature");
    }
      if (!decode) {
        return res.status(401).json({ message: "Invalid token" });
      }
      const pedido = req.body;
      req.body.isDisable = false;
      pedido.userid = decode.userId;
      const document = await ordersModel.create(pedido);
      res.status(201).json(document);
  } catch (error) {
    res.status(500).json(error.message);
  }
}
//get //id
export async function getOrder(req, res) {
  try {
    const token = req.headers.authorization;
let decode
    try{
      decode = jwt.verify(token, secretKey);
    }catch{
      return res.status(401).json("invalid signature");
    }
    if (!decode) {
      return res.status(401).json({ message: "Invalid token" });
    }
    const id = req.params.id;
    const document = await ordersModel.findOne({ _id: id, isDisable: false });
    document ? res.status(200).json(document) : res.sendStatus(404);
  } catch (error) {
    res.status(500).json(error.message);
  }
}

//get pedido por usuari y/o fechas
export async function getOrderbyUandorD(req, res) {
  try {
    const token = req.headers.authorization;
let decode
    try{
      decode = jwt.verify(token, secretKey);
    }catch{
      return res.status(401).json("invalid signature");
    }
    if (!decode) {
      return res.status(401).json({ message: "Invalid token" });
    }
    const { user_id, initial_date, final_date } = req.query;
    const filter = {
      ...(user_id && { userid: user_id }),
      ...(initial_date &&
        final_date && {
          createdAt: {
            $gte: Date(initial_date),
            $lt: Date(final_date), //no estoy seguro como funciona esto de los dates, asuuuuuumo que es con lo de timestamps pero aja
          },
        }),
      userid: decode.userId,
      isDisable: false,
    };
    const documents = await ordersModel.find(filter);
    console.log(documents)
    documents.length > 0 ? res.status(200).json(documents) : res.sendStatus(404);
  } catch (error) {
    res.status(500).json(error.message);
  }
}

//update
export async function patchOrder(req, res) {
  try {
    const token = req.headers.authorization;
let decode
    try{
      decode = jwt.verify(token, secretKey);
    }catch{
      return res.status(401).json("invalid signature");
    }
    if (!decode) {
      return res.status(401).json({ message: "Invalid token" });
    }
    const id = req.params.id;
    const document = await productsModel.findOneAndUpdate({userid: decode.userId, _id: id}, req.body,{ runValidators: true });
    document ? res.status(200).json("Changes applied") : res.status(404).json("Product not found or user didn't create this product");
  } catch (error) {
    res.status(500).json(error.message);
  }
}
