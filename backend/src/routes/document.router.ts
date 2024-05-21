import { Router } from 'express';
import multer from 'multer';
import uploadConfigDocs from '../config/uploadDocs';

import documentController from '../controllers/documentController';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const userRouter = Router();
const upload = multer(uploadConfigDocs);

userRouter.use(ensureAuthenticated);

userRouter.get('/', documentController.index);
userRouter.post('/', upload.single('docs'), documentController.store);
userRouter.delete('/:doc', documentController.destroy);

export default userRouter;
