import { User, Address } from "../application/entities";

export interface CRUDRepository<T> {
    find(criteria?: Partial<T>): Promise<T[]>;
    findOne(criteria: Partial<T>): Promise<T>;
    create(entity: Partial<T>): Promise<T>;
    update(criteria: Partial<T>, partialEntity: Partial<T>): Promise<number>;
    delete(criteria: Partial<T>): Promise<number>;
}

export interface UserRepository extends CRUDRepository<User> {}
export interface AddressRepository extends CRUDRepository<Address> {}