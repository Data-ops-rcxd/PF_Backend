import ordersModel from "./orders.model.js";
// jwt key and imports.
import jwt from "jsonwebtoken";
//creo que un problema que puede pasar es que esta secret key de aqui no es la misma que la del usuario (Y debe ser asi).
//O al menos asi lo entiendo, puesto que no necesita key para el jwt en el usuario entonces asumo que se usa eso para darle la key y que pueda hacer todos los demas procesos que si necesitan una key 
const secretKey = process.env.secretKey;
//create
export async function createOrder(req, res) {
    try {
      const token = req.headers.authorization;
      const decode = jwt.verify(token, secretKey);
      if (!decode) {
        return res.status(401).json({ message: 'Invalid token' });
      }
      const pedido = req.body;
      req.body.active = true;
      const document = await ordersModel.create(pedido);
      res.status(201).json(document);
    } catch (error) {
      res.status(400).json(error.message);//creo que a estos res.status deberiamos darles return, no?
    }
  }
//get //id
  export async function getOrder(req, res) {
    try {
      const token = req.headers.authorization;
      const decode = jwt.verify(token, secretKey);
      if (!decode) {
        return res.status(401).json({ message: 'Invalid token' });
      }
      const id = req.params.id;
      const document = await ordersModel.findOne({ id: id, active: true });
      res.status(200).json(document);
    } catch (error) {
      res.status(400).json(error.message);
    }
}

//get pedido por usuari y/o fechas
export async function getOrderbyUandorD(req, res) {
    try {
      const token = req.headers.authorization;
      const decode = jwt.verify(token, secretKey);
      if (!decode) {
        return res.status(401).json({ message: 'Invalid token' });
      }
      const {user_id,  initial_date, final_date } = req.query;
      const filter = {
        ...(user_id && { user_id: user_id }),
        ...(initial_date &&
          final_date && {
            createdAt: {
              $gte: new Date(initial_date),
              $lt: new Date(final_date),//no estoy seguro como funciona esto de los dates, asuuuuuumo que es con lo de timestamps pero aja
            },
          }),
        active: true,
      };
      const documents = await ordersModel.find(filter);
      documents.length > 0
        ? res.status(200).json(documents)
        : res.sendStatus(404);
    } catch (error) {
      res.status(400).json(error.message);
    }
}

//update
export async function patchOrder(req, res) {
    try {
      const token = req.headers.authorization;
      const decode = jwt.verify(token, secretKey);
      if (!decode) {
        return res.status(401).json({ message: 'Invalid token' });
      }
      const id = req.params.id;
      const document = await ordersModel.findOneAndUpdate(
        { id: id, active: true },
        req.body,//asumo que esto es lo que cambiaba el la orden en la anterior ves pero necesito que me expliquen si asi funciona(como ves estoy copiando y pegnado la mayoria)
        {
          runValidators: true,
          new: true,//no se si dejar esto
        }
      );
      res.status(200).json(document);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }