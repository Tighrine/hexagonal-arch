import { CRUDRepository as DomainCRUD } from '../../../../domain/ports/Repositories';
import { User, Address } from "../../../../domain/application/entities";

import { DeepPartial, FindOptionsWhere, Repository } from 'typeorm';
import { DBUser } from '../UserRepository';
import { DBAddress } from '../UserAdressRepository';


type DomainEntity = User | Address;
type DBEntity = DBUser | DBAddress;

class CRUDRepository<T extends DomainEntity, U extends DBEntity>
    implements DomainCRUD<T> {

    constructor(protected repository: Repository<U>) {}

    async find(criteria?: Partial<T> | undefined): Promise<T[]> {
        const entities = await this.repository.findBy(
            criteria as FindOptionsWhere<U>,
        );

        return entities.map(entity => entity.toDomainEntity()) as T[];
    }

    async findOne(criteria: Partial<T>): Promise<T> {
        const entity = await this.repository.findOneBy(
            criteria as FindOptionsWhere<U>
        );

        return entity?.toDomainEntity() as T;
    }

    async create(entity: Partial<T>): Promise<T> {
        const dbEntity = this.repository.create(entity as DeepPartial<U>);
        const createdEntity = await this.repository.save(dbEntity);

        return createdEntity.toDomainEntity() as T;
    }

    async update(criteria: Partial<T>, partialEntity: Partial<T>): Promise<number> {
        const result = await this.repository.update(
            criteria as FindOptionsWhere<U>,
            partialEntity as any
        );

        return typeof result.affected === "number" ? result.affected : -1;

    }

    async delete(criteria: Partial<T>): Promise<number> {
        const result = await this.repository.delete(
            criteria as FindOptionsWhere<U>
        );

        return typeof result.affected === "number" ? result.affected : -1;
    }

}

export default CRUDRepository;