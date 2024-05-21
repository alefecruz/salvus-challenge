import { Router } from 'express';

import workspaceController from '../controllers/workspaceController';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const userRouter = Router();

userRouter.use(ensureAuthenticated);

userRouter.get('/', workspaceController.index);
userRouter.post('/', workspaceController.store);
userRouter.delete('/', workspaceController.destroy);

export default userRouter;
