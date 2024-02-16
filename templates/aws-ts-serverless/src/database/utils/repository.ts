import { Repository, DataSource, ObjectLiteral } from "typeorm";

export class BaseRepository<T extends ObjectLiteral> {
    private repository: Repository<T>;

    constructor(dataSource: DataSource, entity: new () => T) {
        this.repository = dataSource.getRepository(entity);
    }

    async create(item: T): Promise<T> {
        return this.repository.save(item);
    }

    async findAll(): Promise<T[]> {
        return this.repository.find();
    }

    async findOne(filter: any): Promise<T | null> {
        return this.repository.findOneBy(filter);
    }

    async update(id: number, item: Partial<T>): Promise<T | null> {
        await this.repository.update(id, item);
        return this.findOne(id);
    }

    async delete(id: number): Promise<void> {
        await this.repository.delete(id);
    }
}
