import { createUser, deleteUser, getUserbyID, getUserbyName_pass, patchUser } from "./users.controller.js";
import {Router} from 'express';
const router = Router();

// Endpoint GET
router.get('/finduser/:id', getUserbyID );
router.get('/finduserJWT', getUserbyName_pass );

// Endpoint POST
router.post('/createuser', createUser );

// Endpoint PATCH
router.patch('/updateuser', patchUser );

// Endpoint DELETE
router.delete('/deleteuser', deleteUser );

export default router;