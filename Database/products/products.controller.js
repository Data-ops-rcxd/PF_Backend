
import productsModel from "./products.model.js";
// jwt key and imports.
import jwt from "jsonwebtoken";
//creo que un problema que puede pasar es que esta secret key de aqui no es la misma que la del usuario (Y debe ser asi).
//O al menos asi lo entiendo, puesto que no necesita key para el jwt en el usuario entonces asumo que se usa eso para darle la key y que pueda hacer todos los demas procesos que si necesitan una key 
const secretKey = process.env.secretKey;
//create
export async function createProduct(req, res) {
    
    try {
        const token = req.headers.authorization;
        const decode = jwt.verify(token, secretKey);
        if (!decode) {
            return res.status(401).json({ message: 'Invalid token' });
        }
      const product = req.body;
      req.body.active = true;
      const document = await productsModel.create(product);
      res.status(201).json(document);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }
//read product id
export async function getProduct(req, res) {
    try {
      const id = req.params.id;
      const document = await productsModel.findOne({ _id: id, active: true });
      res.status(200).json(document);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }
//read usuario, texto y categoria
export async function getProductbyUTandorC(req, res) {
    try {
      const { categoria, nom, userid} = req.query;
      const filter = {
        ...(categoria && { categoria: categoria }),
        ...(nom && { nom: nom }),//lo que no se es como hacer para filtrarlo para que envez de que tenga que ser igual simplemente funcione con que contenga ese nombre
        ...(userid && { userid: userid }),
        active: true,
      };
      const documents = await productoModel.find(filter);
      documents.length > 0
        ? res.status(200).json(documents)
        : res.sendStatus(404);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

//read categorias a partir de usuario (este si tengo unas preguntas)
export async function getCategoriesbyUser(req, res) {
    try {
      const { userid} = req.query;
      const filter = {
        ...(userid && { userid: userid }),
        active: true,
      };
      //no se como hacer para que filtre solo la primera vez que aparezca cada categoria
      const documents = await productsModel.find(filter);
      documents.length > 0
        ? res.status(200).json(documents.categoria)
        : res.sendStatus(404);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }


//actualiza (?)
export async function patchProduct(req, res) {
    try {
      const token = req.headers.authorization;
      const decode = jwt.verify(token, secretKey);
      if (!decode) {
        return res.status(401).json({ message: 'Invalid token' });
      }
      const id = req.params.id;
      const document = await productsModel.findByIdAndUpdate(id, req.body, {
        runValidators: true,
        new: true,
      });
      res.status(200).json(document);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

//"elimina", osea soft delete (?)
export async function deleteProduct(req, res) {
    try {
      const token = req.headers.authorization;
      const decode = jwt.verify(token, secretKey);
      if (!decode) {
        return res.status(401).json({ message: 'Invalid token' });
      }
      const id = req.params.id;
        const document = await productsModel.findByIdAndUpdate(
        id,
        { active: false },
        { new: true }
        );
        res.status(200).json(document);
    } catch (err) {
      res.status(500).json(err.message);
    }
}
