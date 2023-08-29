import { Request, Response } from 'express';

export const getWorkouts = async (_: Request, res: Response) => {
	return res.json({
		success: true,
		message: 'Get Workouts',
		data: [],
	});
};

export const postWorkouts = async (_: Request, res: Response) => {
	return res.json({
		success: true,
		message: 'post Workouts',
		data: [],
	});
};

export const putWorkouts = async (_: Request, res: Response) => {
	return res.json({
		success: true,
		message: 'put Workouts',
		data: [],
	});
};

export const deleteWorkouts = async (_: Request, res: Response) => {
	return res.json({
		success: true,
		message: 'Delete Workouts',
		data: [],
	});
};
