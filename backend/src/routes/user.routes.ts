import {
	getUsers,
	postUser,
	putUser,
	deleteUser,
} from '../controllers/user.controller';
import {
	RouterGenerator
} from '../helpers/router.helper';

const routes = RouterGenerator.resourceApi({
	path: '/users',
	functions: [getUsers, postUser, putUser, deleteUser],
});

export default routes;
