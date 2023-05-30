import productsModel from "./products.model.js";
// jwt key and imports.
import jwt from "jsonwebtoken";
/* se usa la secretkey para que el servidor pueda decodificar el token que el usario manda de regreso, si no tiene esa 
secretkey entonces el usuario no reconocido y no se le da acceso a donde quiere ir, en este caso al endpoint */
const secretKey = process.env.secretKey;

//create
export async function createProduct(req, res) {
  try {
    const token = req.headers.authorization;
    const decode = jwt.verify(token, secretKey);
    if (!decode) {
      return res.status(401).json({ message: "Invalid token" });
    }
    const product = req.body;
    req.body.isDisable = false;
    product.userid = decode.userId;
    const document = await productsModel.create(product);
    res.status(201).json(document);
  } catch (error) {
    res.status(500).json(error.message);
  }
}
//read product id
export async function getProduct(req, res) {
  try {
    const id = req.params.id;
    const document = await productsModel.findOne({ _id: id, isDisable: false });
    res.status(200).json(document);
  } catch (error) {
    res.status(500).json(error.message);
  }
}
//read usuario, texto y categoria
export async function getProductbyUTandorC(req, res) {
  try {
    const { categoria, nom, userid } = req.query;
    const filter = {
      ...(categoria && { categories: { $in: [categoria] } }),
      ...(nom && { $text: { $search: nom } }),
      ...(userid && { userid: userid }),
      isDisable: false,
    };
    const documents = await productsModel.find(filter);
    documents.length > 0
      ? res.status(200).json(documents)
      : res.sendStatus(404);
  } catch (error) {
    res.status(500).json(error.message);
  }
}

//read categorias a partir de usuario
export async function getCategoriesbyUser(req, res) {
  try {
    const { userid } = req.params;
    const documents = await productsModel.find({
      userid: userid,
      isDisable: false,
    });
    const categoriesSet = new Set();
    documents.forEach((product) => {
      product.categoria.forEach((category) => {
        categoriesSet.add(category);
      });
    });
    const categories = Array.from(categoriesSet);

    categories.length > 0
      ? res.status(200).json(categories)
      : res.sendStatus(404);
  } catch (error) {
    res.status(500).json(error.message);
  }
}

//actualiza
export async function patchProduct(req, res) {
  try {
    const token = req.headers.authorization;
    const decode = jwt.verify(token, secretKey);
    if (!decode) {
      return res.status(401).json({ message: "Invalid token" });
    }
    const id = req.params.id;
    const document = await productsModel.findOneAndUpdate(
      { userid: decode.userId, _id: id },
      req.body,
      { runValidators: true }
    );
    document
      ? res.status(200).json("Changes applied")
      : res
          .status(404)
          .json("Product not found or user didn't create this product");
  } catch (error) {
    res.status(500).json(error.message);
  }
}

//"elimina", osea soft delete
export async function deleteProduct(req, res) {
  try {
    const token = req.headers.authorization;
    const decode = jwt.verify(token, secretKey);
    if (!decode) {
      return res.status(401).json({ message: "Invalid token" });
    }
    const id = req.params.id;
    const document = await productsModel.findOneAndUpdate(
      { userid: decode.userId, _id: id },
      { isDisable: true }
    );
    document
      ? res.status(200).json("Changes applied")
      : res
          .status(404)
          .json("Product not found or user didn't create this product");
  } catch (err) {
    res.status(500).json(err.message);
  }
}
