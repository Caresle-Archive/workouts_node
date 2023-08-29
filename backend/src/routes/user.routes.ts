import { Router } from 'express';
import {
	getUsers,
	postUser,
	putUser,
	deleteUser,
} from '../controllers/user.controller';

const routes = Router();

routes.get('/users', getUsers);
routes.post('/users', postUser);
routes.put('/users/:id', putUser);
routes.delete('/users/:id', deleteUser);

export default routes;
