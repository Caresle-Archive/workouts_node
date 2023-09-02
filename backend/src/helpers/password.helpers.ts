import bcrypt from 'bcrypt';
import Environment from '../environment';

export const generatePassword = (password: string) => {
	return bcrypt.hashSync(password, Environment.SALT_ROUND);
};

export const validatePassword = (password: string, hash: string) => {
	return bcrypt.compareSync(password, hash);
};
