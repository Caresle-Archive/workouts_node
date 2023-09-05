import { Request, Response } from 'express';
import { entitiesList } from '../entity/entity';
import { IGeneralError, getError } from '../helpers/responseError.helpers';
import ErrorMessages from '../helpers/errorMessages.helpers';
import Validator from '../helpers/validator.helpers';

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
		console.log(error);
		return getError(ErrorMessages.generalError());
	}
};

const validateUser = (username: string, password: string) : IGeneralError | null => {
	if (Validator.empty(username)) return getError(ErrorMessages.required('username'));
	if (Validator.empty(password)) return getError(ErrorMessages.required('password'));

	if (!Validator.minLength(username, 5)) return getError(ErrorMessages.minLength('username', 5));
	if (!Validator.minLength(password, 5)) return getError(ErrorMessages.minLength('password', 5));

	return null;
};

export const postUser = async (req: Request, res: Response) => {
	try {
		const { username, password } = req.body;

		const errors = validateUser(username, password);

		if (errors !== null) return res.status(400).json(errors);

		// Validate user doesn't exists in the db
		const users = await User.findAndCountBy({
			username: username,
		});

		console.log(users);

		return res.json({
			success: true,
			message: 'User created',
			data: []
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json(getError(ErrorMessages.generalError()));
	}
};

export const putUser = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;

		if (Validator.empty(id)) return res.status(400).json(getError(ErrorMessages.required('id')));

		const { username, password  } = req.body;

		const errors = validateUser(username, password);

		if (errors !== null) return res.status(400).json(errors);

		return res.json({
			success: true,
			message: 'User updated',
			data: [],
		});
	} catch (error) {
		return res.status(500).json(getError(ErrorMessages.generalError()));
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
		console.log(error);
		return getError(ErrorMessages.generalError());
	}
};
