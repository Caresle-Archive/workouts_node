import { Request, Response } from 'express';

export const getWorkoutsType = async (_: Request, res: Response) => {
	return res.json({
		success: true,
		message: 'Get WorkoutsType',
		data: [],
	});
};

export const postWorkoutsType = async (_: Request, res: Response) => {
	return res.json({
		success: true,
		message: 'post WorkoutsType',
		data: [],
	});
};

export const putWorkoutsType = async (_: Request, res: Response) => {
	return res.json({
		success: true,
		message: 'put WorkoutsType',
		data: [],
	});
};

export const deleteWorkoutsType = async (_: Request, res: Response) => {
	return res.json({
		success: true,
		message: 'Delete WorkoutsType',
		data: [],
	});
};
