import { Router } from 'express';

import SessionController from '../controllers/sessionController';

const sessionRouter = Router();

sessionRouter.post('/', SessionController.store);

export default sessionRouter;
