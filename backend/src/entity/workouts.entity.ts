import {
	Entity,
	BaseEntity,
	PrimaryGeneratedColumn,
	Column,
} from 'typeorm';

@Entity()
export class Workouts extends BaseEntity {
	@PrimaryGeneratedColumn()
		id: number;

	@Column()
		name: string;

	@Column({
		name: 'id_type'
	})
		idType: number;
}
