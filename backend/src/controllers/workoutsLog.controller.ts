import { Request, Response } from 'express';

export const getWorkoutsLog = async (_: Request, res: Response) => {
	return res.json({
		success: true,
		message: 'Get WorkoutsLog',
		data: [],
	});
};

export const postWorkoutsLog = async (_: Request, res: Response) => {
	return res.json({
		success: true,
		message: 'post WorkoutsLog',
		data: [],
	});
};

export const putWorkoutsLog = async (_: Request, res: Response) => {
	return res.json({
		success: true,
		message: 'put WorkoutsLog',
		data: [],
	});
};

export const deleteWorkoutsLog = async (_: Request, res: Response) => {
	return res.json({
		success: true,
		message: 'Delete WorkoutsLog',
		data: [],
	});
};
