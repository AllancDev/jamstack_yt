import { Request, Response } from 'express';
import { Category } from '../../models/Category';

export async function createCategories(request: Request, response: Response) {
    try {
        const {name, icon} = request.body;
        console.log(name, icon);
        const category = await Category.create({
            name,
            icon
        });

        return response.status(201).json(category);
    } catch (error) {
        console.log(error);
        return response.sendStatus(500);
    }
}
