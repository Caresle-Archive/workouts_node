import {
	Entity,
	BaseEntity,
	PrimaryGeneratedColumn,
	Column,
} from 'typeorm';

@Entity()
export class Deck extends BaseEntity {
	@PrimaryGeneratedColumn()
		id: number;

	@Column()
		name: string;

	@Column({
		name: 'id_workout'
	})
		idWorkout: number;

	@Column({
		name: 'id_user'
	})
		idUser: number;
}
