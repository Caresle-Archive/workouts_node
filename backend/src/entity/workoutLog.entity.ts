import {
	Entity,
	BaseEntity,
	PrimaryGeneratedColumn,
	Column,
} from 'typeorm';

@Entity()
export class WorkoutLog extends BaseEntity {
	@PrimaryGeneratedColumn()
		id: number;

	@Column({ name: 'id_deck' })
		idDeck: number;

	@Column({ name: 'id_workout' })
		idWorkout: number;

	@Column()
		sets: number;

	@Column()
		reps: number;

	@Column()
		weight: number;

	@Column()
		notes: string;
}
