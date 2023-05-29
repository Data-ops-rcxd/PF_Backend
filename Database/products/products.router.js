import { getProduct, patchProduct, getProductbyUTandorC, getCategoriesbyUser, createProduct, deleteProduct} from "./products.controller.js";
import {Router} from 'express';
const router = Router();

// Endpoint GET
router.get('/:id', getProduct );
router.get('/:categoria/:texto/:userid', getProductbyUTandorC );
router.get('/:userid/', getCategoriesbyUser );

// Endpoint POST
router.post('/', createProduct );

// Endpoint PATCH
router.patch('/:id', patchProduct);

// Endpoint DELETE
router.delete('/:id', deleteProduct );

export default router;