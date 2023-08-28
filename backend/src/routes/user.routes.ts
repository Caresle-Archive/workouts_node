import { Router } from 'express';
import { getUsers } from '../controllers/user.controller';

const routes = Router();

routes.get('/users', getUsers);

export default routes;
