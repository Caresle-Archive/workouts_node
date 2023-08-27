import { WorkoutsType } from './workouts_type.entity';
import { User } from './user.entity';
import { Weight } from './weight.entity';
import { Workouts } from './workouts.entity';

export const entitiesList = {
	workoutsType: WorkoutsType,
	user: User,
	weight: Weight,
	workouts: Workouts,
};

const entities = [
	entitiesList.workoutsType,
	entitiesList.user,
	entitiesList.weight,
	entitiesList.workouts,
];

export default entities;
