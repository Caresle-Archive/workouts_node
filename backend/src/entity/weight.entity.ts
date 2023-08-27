import {
	Entity,
	BaseEntity,
	PrimaryGeneratedColumn,
	Column,
} from 'typeorm';

@Entity()
export class Weight extends BaseEntity {
	@PrimaryGeneratedColumn()
		id: number;

	@Column({
		name: 'id_user',
	})
		idUser : number;
}
