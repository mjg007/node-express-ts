import { Fruit } from '../models'
import { Request, Response } from 'express';

var fruits: Array<Fruit> = [
    {
        id: 1,
        name: 'Banana'
    },
    {
        id: 2,
        name: 'Manzana'
    },
    {
        id: 3,
        name: 'Naranja'
    }
]

export const fruitsControllers = {
    getFruits: (request: Request, response: Response) => response.status(200).json(fruits),
    getFruitsById: (request: Request, response: Response) => response.status(200).json(fruits.find(x => x.id.toString() === request.params.id)),
    saveFruits: (request: Request, response: Response) => response.status(200).json(fruits.push(request.body)),
    updateFruits: (request: Request, response: Response) => response.status(200).json(fruits.map(x => x.id.toString() === request.body.id ? {...x, name: request.body.name} : x))
}