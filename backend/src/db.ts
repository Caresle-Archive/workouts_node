import { DataSource } from 'typeorm';
import entities from './entity/entity';

interface IDBConfig {
	name?: string;
	host?: string;
	username?: string;
	password?: string;
	port?: number;
}

const getConfig = () : IDBConfig => {
	return {
		name: process.env.DB_NAME ?? '',
		host: process.env.DB_HOST ?? '',
		username: process.env.DB_USER ?? '',
		password: process.env.DB_PASS ?? '',
		port: process.env.DB_PORT ? Number(process.env.DB_PORT) : undefined,
	};
};

const dbConfig = getConfig();

export const AppDataSource = new DataSource({
	type: 'postgres',
	host: dbConfig.host,
	database: dbConfig.name,
	username: dbConfig.username,
	password: dbConfig.password,
	port: dbConfig.port,
	entities,
	synchronize: true,
});
