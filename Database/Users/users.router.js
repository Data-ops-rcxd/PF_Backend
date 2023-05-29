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
/*
// Endpoint GET
router.get('/:id', getUserbyID );
router.get('/:mail/:password', getUserbyName_pass );

// Endpoint POST
router.post('/', createUser );

// Endpoint PATCH
router.patch('/:id', patchUser );

// Endpoint DELETE
router.delete('/:id', deleteUser );
*/
export default router;