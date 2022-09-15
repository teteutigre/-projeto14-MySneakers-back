import express, { Router } from 'express';
import { validateToken } from '../middlewares/validateToken.js'
import { getProducts } from '../controllers/productController.js'; 

const producRouter = express.Router();

producRouter.get("/products", validateToken, getProducts);

export default producRouter