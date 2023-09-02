export interface IGeneralError {
	success: boolean;
	message: string | string[];
	data: [];
}

export const getError = (msg : string | Array<string>) : IGeneralError => {
	const error : IGeneralError = {
		success: false,
		message: (typeof msg === 'string') ? msg : [...msg],
		data: [],
	};

	return error;
};
