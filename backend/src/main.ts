import DotEnv from 'dotenv';
DotEnv.config();
import app from './app';

const PORT = process.env.PORT || 3333;

async function main() {
	try {
		app.listen(PORT, () => console.log(`Server on PORT ${PORT}`));
	} catch (error) {
		console.error(error);
	}
}

main();
