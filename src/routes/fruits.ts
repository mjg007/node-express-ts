import { Router } from 'express'
import { fruitsControllers } from '../controllers/fruits'

const fruitsRouter = Router()

fruitsRouter.route('/')
    .get(fruitsControllers.getFruits)
    .post(fruitsControllers.saveFruits)
    .put(fruitsControllers.updateFruits)

fruitsRouter.route('/:id')
    .get(fruitsControllers.getFruitsById)

export default fruitsRouter