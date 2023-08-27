import { WorkoutsType } from './workouts_type.entity';
import { User } from './user.entity';
import { Weight } from './weight.entity';
import { Workouts } from './workouts.entity';
import { Deck } from './deck.entity';
import { WorkoutLog } from './workout_log.entity';

export const entitiesList = {
	workoutsType: WorkoutsType,
	user: User,
	weight: Weight,
	workouts: Workouts,
	deck: Deck,
	workoutLog: WorkoutLog,
};

const entities = [
	entitiesList.workoutsType,
	entitiesList.user,
	entitiesList.weight,
	entitiesList.workouts,
	entitiesList.deck,
	entitiesList.workoutLog,
];

export default entities;
