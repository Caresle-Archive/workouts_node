import { Request, Response } from 'express';
import { entitiesList } from '../entity/entity';

const User = entitiesList.user;

export const getUsers = async (_: Request, res: Response) => {
	try {
		const users = await User.find();
		return res.json({
			success: true,
			message: 'Users finded',
			data: users,
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: 'Error',
			data: [],
		});
	}
};
