import { Request, Response, NextFunction } from 'express';
import {
	validateJWT
} from '../helpers/jwt.helpers';
import {
	getError
} from '../helpers/responseError.helpers';

export const isAuth = (req: Request, res: Response, next: NextFunction) => {
	const token = req.headers['api-key'] as string;

	if (
		token === undefined
		|| token === null
		|| token === ''
	) {
		const error = getError('No API-KEY header');
		return res.status(400).json(error);
	}

	const validate = validateJWT(token);

	if (validate === undefined) {
		return res.status(400).json(
			getError('Invalid token')
		);
	}

	return next();
};
