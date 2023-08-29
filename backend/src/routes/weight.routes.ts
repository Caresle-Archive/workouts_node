import {
	getWeight,
	postWeight,
	putWeight,
	deleteWeight,
} from '../controllers/weight.controller';
import { RouterGenerator } from '../helpers/router.helper';

const routes = RouterGenerator.resourceApi({
	path: '/weight',
	functions: [getWeight, postWeight, putWeight, deleteWeight]
});

export default routes;
