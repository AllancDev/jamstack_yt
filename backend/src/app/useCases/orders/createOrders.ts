import { Request, Response } from 'express';
import { Order } from '../../models/Order';

export async function createOrders(request: Request, response: Response) {
    try {
        const { table, products } = request.body;

        const order = await Order.create({ table, products });

        return response.status(201).json(order);

    } catch (error ) {
        return response.sendStatus(500);
    }
}
