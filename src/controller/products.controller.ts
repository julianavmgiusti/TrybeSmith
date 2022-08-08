import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import ProductService from '../services/products.service';

class ProductController {
  constructor(private productService = new ProductService()) {}

  public create = async (req: Request, res: Response) => {
    const product = req.body;
    const newProduct = await this.productService.create(product);
    return res.status(StatusCodes.CREATED).json(newProduct);
  };

  public getAll = async (_req: Request, res: Response) => {
    const products = await this.productService.getAll();
    return res.status(StatusCodes.OK).json(products);
  };
}

export default ProductController;