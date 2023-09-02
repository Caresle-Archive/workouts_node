import jwt from 'jsonwebtoken';
import Environment from '../environment';

interface IJWTUserInfo {
	username: string;
	rights: number[];
	rol: string;
}

export const createJWT = (payload: IJWTUserInfo) => {
	return jwt.sign(payload, Environment.JWT_SECRET);
};

export const validateJWT = (token: string) : IJWTUserInfo | undefined => {
	const tokenValidated = jwt.verify(token, Environment.JWT_SECRET);

	if (!tokenValidated) return undefined;

	return tokenValidated as IJWTUserInfo;
};
