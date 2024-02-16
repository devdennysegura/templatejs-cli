import "reflect-metadata";
import { DataSource } from 'typeorm';
import { UserEntity } from '../entities/user';

export const AppDataSource = new DataSource({
    type: 'postgres',
    username: 'postgres',
    password: '1234',
    database: 'clientify',
    host: 'localhost',
    port: 5432,
    entities: [UserEntity],
    migrations: ["src/database/migrations/*.ts"],
    synchronize: true,
    logging: false,
});

if (require.main === module) {
    AppDataSource.initialize()
        .then(() => {
            console.log("Data Source has been initialized!");
        })
        .catch((err) => {
            console.error("Error during Data Source initialization:", err);
        });
}