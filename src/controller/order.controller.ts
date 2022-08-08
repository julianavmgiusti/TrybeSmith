import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import OrderService from '../services/order.service';

class OrderController {
  constructor(private orderService = new OrderService()) {}

  public getAll = async (_req: Request, res: Response) => {
    const ordersList = await this.orderService.getAll();
    res.status(StatusCodes.OK).json(ordersList);
  };
}

export default OrderController; 