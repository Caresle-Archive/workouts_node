import { RouterGenerator } from '../helpers/router.helper';
import {
	getWorkoutsLog,
	postWorkoutsLog,
	putWorkoutsLog,
	deleteWorkoutsLog,
} from '../controllers/workoutsLog.controller';

const routes = RouterGenerator.resourceApi({
	path: '/workouts-log',
	functions: [getWorkoutsLog, postWorkoutsLog, putWorkoutsLog, deleteWorkoutsLog],
});

export default routes;
