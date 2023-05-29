import Users from "./users.model.js";
// jwt key and imports.
import jwt from "jsonwebtoken";
const secretKey = process.env.secretKey;


//crea usuario (working)
export async function createUser(req, res) {
  try {
    const userinfo = req.body;
    const document = await Users.create(userinfo);
    res.status(201).send(document);
  } catch (err) {
    res.status(500).json(err.message);
  }
}
//buscar por id (working)
export async function getUserbyID(req, res) {
  try {
    const filter = req.params.id;
    const value = await Users.findOne({ _id: filter, isDisable: false });
    value ? res.status(200).json(value) : res.sendStatus(404);
  } catch (err) {
    res.status(500).json(err.message);
  }
}
//busca por email y contraseña (working)
export async function getUserbyName_pass(req, res) {
  try {
    const user = req.body;
    const found = await Users.findOne({
      email: user.email,
      password: user.password,
      isDisable: false,
    });
    if (found) {
      const token = jwt.sign({ userId: found._id }, secretKey);
      res.status(200).json({ token });
    } else {
      res.status(404).json({ error: "User Not found" });
    }
  } catch (err) {
    res.status(500).json(err.message);
  }
}
//actualiza (working)
export async function patchUser(req, res) {
  try {
    const token = req.headers.authorization;
    const decode = jwt.verify(token, secretKey);
    if (!decode) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    const document = await Users.findOneAndUpdate(
      { _id: decode.userId, isDisable: false },
      req.body,
      { runValidators: true }
    );
    document ? res.status(200).json("changes applied") : res.sendStatus(404);
  } catch (err) {
    res.status(500).json(err.message);
  }
}

//"elimina", osea soft delete (working)
export async function deleteUser(req, res) {
  try {
    const token = req.headers.authorization;
    const decode = jwt.verify(token, secretKey);
    if (!decode) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    const document = await Users.findByIdAndUpdate(decode.userId, { isDisable: true });
    document ? res.status(200).json("changes applied") : res.sendStatus(404);
  } catch (err) {
    res.status(400).json(err.message);
  }
}
