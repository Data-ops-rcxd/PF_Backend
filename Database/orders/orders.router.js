import { getOrder, getOrderbyUandorD, createOrder, patchOrder} from "./orders.controller.js";
import {Router} from 'express';
const router = Router();

// Endpoint GET
router.get('/:id', getOrder );
router.get('/:user_id/:initial_date/:final_date', getOrderbyUandorD );

// Endpoint POST
router.post('/', createOrder );

// Endpoint PATCH
router.patch('/:id/:calificacion/:comentarios', patchOrder);

export default router;