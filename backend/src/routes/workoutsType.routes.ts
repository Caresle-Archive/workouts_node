import { RouterGenerator } from '../helpers/router.helper';
import {
	getWorkoutsType,
	postWorkoutsType,
	putWorkoutsType,
	deleteWorkoutsType,
} from '../controllers/workoutsType.controller';

const routes = RouterGenerator.resourceApi({
	path: '/workouts-type',
	functions: [getWorkoutsType, postWorkoutsType, putWorkoutsType, deleteWorkoutsType],
});

export default routes;
