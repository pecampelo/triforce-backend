/* eslint-disable no-unused-vars */
import {
  Request, Response, Router,
} from 'express';

import institutionController from '../controllers/institutionController';
import credentialController from '../controllers/credentialController';
import accountController from '../controllers/accountController';

const routes = Router();

routes.get('/', (req: Request, res: Response) => {
  res.send({
    endpoints: [
      '/institutions',
      '/credentials',
      '/accounts',
    ],
  });
  res.end();
});

routes.get('/institutions', async (req: Request, res: Response) => {

  await institutionController.index(req, res);
  res.end();
});

routes.post('/credentials', async (req: Request, res: Response) => {

  await credentialController.postCredentials(req, res);
  res.end();
});

routes.get('/accounts', async (req: Request, res: Response) => {
  await accountController.findByQueryConnectionId(req, res);
  res.end();
});

routes.get('/accounts/:id/transactions', async (req: Request, res: Response) => {
  await accountController.findById(req, res);
  res.end();
});

routes.post('/accounts/:id/transactions', async (req: Request, res: Response) => {
  await accountController.postId(req, res);
  res.end();
});

export default routes;
