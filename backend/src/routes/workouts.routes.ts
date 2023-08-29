import { RouterGenerator } from '../helpers/router.helper';
import {
	getWorkouts,
	postWorkouts,
	putWorkouts,
	deleteWorkouts,
} from '../controllers/workouts.controller';

const routes = RouterGenerator.resourceApi({
	path: '/workouts',
	functions: [getWorkouts, postWorkouts, putWorkouts, deleteWorkouts],
});

export default routes;
