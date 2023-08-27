import DotEnv from 'dotenv';
DotEnv.config();
import app from './app';
import { AppDataSource } from './db';

const PORT = process.env.PORT || 3333;

async function main() {
	try {
		await AppDataSource.initialize();
		app.listen(PORT, () => console.log(`Server on PORT ${PORT}`));
	} catch (error) {
		console.error(error);
	}
}

main();
