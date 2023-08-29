import { Request, Response } from 'express';

export const getWeight = async (_: Request, res: Response) => {
	return res.json({
		success: true,
		message: 'Get weight',
		data: [],
	});
};

export const postWeight = async (_: Request, res: Response) => {
	return res.json({
		success: true,
		message: 'post weight',
		data: [],
	});
};

export const putWeight = async (_: Request, res: Response) => {
	return res.json({
		success: true,
		message: 'put weight',
		data: [],
	});
};

export const deleteWeight = async (_: Request, res: Response) => {
	return res.json({
		success: true,
		message: 'Delete weight',
		data: [],
	});
};
