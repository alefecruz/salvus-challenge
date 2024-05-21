import { Router } from 'express';
import multer from 'multer';
import uploadConfigAvatar from '../config/uploadAvatar';

import UserController from '../controllers/userController';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const userRouter = Router();
const upload = multer(uploadConfigAvatar);

userRouter.post('/', UserController.store);

userRouter.use(ensureAuthenticated);

userRouter.patch('/avatar', upload.single('avatar'), UserController.avatar);

userRouter.put('/', UserController.update);

export default userRouter;
