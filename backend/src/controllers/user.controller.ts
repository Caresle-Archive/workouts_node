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

export const postUser = async (req: Request, res: Response) => {
	try {
		console.log(req.body);
		return res.json({
			success: true,
			message: 'User created',
			data: []
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: 'Error',
			data: [],
		});
	}
};

export const putUser = async (req: Request, res: Response) => {
	try {
		console.log(req.body);
		console.log(req.params);
		return res.json({
			success: true,
			message: 'User updated',
			data: [],
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: 'Error',
			data: [],
		});
	}
};

export const deleteUser = async (req: Request, res: Response) => {
	try {
		console.log(req.params);
		return res.json({
			success: true,
			message: 'User deleted',
			data: [],
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: 'Error',
			data: [],
		});
	}
};
