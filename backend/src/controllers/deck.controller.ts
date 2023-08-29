import { Request, Response } from 'express';

export const getDeck = async (_: Request, res: Response) => {
	return res.json({
		success: true,
		message: 'Get Deck',
		data: [],
	});
};

export const postDeck = async (_: Request, res: Response) => {
	return res.json({
		success: true,
		message: 'post Deck',
		data: [],
	});
};

export const putDeck = async (_: Request, res: Response) => {
	return res.json({
		success: true,
		message: 'put Deck',
		data: [],
	});
};

export const deleteDeck = async (_: Request, res: Response) => {
	return res.json({
		success: true,
		message: 'Delete Deck',
		data: [],
	});
};
