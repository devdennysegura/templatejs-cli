import { DataSource } from 'typeorm';
import { UserEntity } from '../entities/user';

export const AppDataSource = new DataSource({
    type: 'postgres',
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    entities: [UserEntity],
    migrations: ["src/database/migrations/*.ts"],
    synchronize: true,
    logging: false,
});