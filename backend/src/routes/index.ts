import { Router } from 'express';

import usersRouter from './users.router';
import sessionsRouter from './sessions.router';
import documentRouter from './document.router';
import workspaceRouter from './workspace.router';
import dashboardRouter from './dashboard.router';

const routes = Router();

routes.use('/user', usersRouter);
routes.use('/session', sessionsRouter);
routes.use('/document', documentRouter);
routes.use('/workspace', workspaceRouter);
routes.use('/info', dashboardRouter);

export default routes;
