import express, { NextFunction } from "express";
import {getProducts, createProduct, getProduct, deleteProduct, updateProduct } from "../application/product";


export const productRouter = express.Router();

const asyncHandler = (
    fn:(req: Request, res: Response, next: NextFunction) =>
         Promise<any>): RequestHandler => {
            return (req, res, next) => {
                fn(req, res, next).catch(next);
            };
        };
    };



productRouter
.route('/')
.get(getProducts)
.post(createProduct);

productRouter
.route('/:id')
.get(getProduct)
.delete(deleteProduct)
.patch(updateProduct);
