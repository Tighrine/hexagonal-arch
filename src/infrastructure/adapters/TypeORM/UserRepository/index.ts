import { UserRepository as DomainUserRepository } from './../../../../domain/ports/Repositories';
import { User } from "../../../../domain/application/entities";
import CRUDRepository from "../CRUDRepository";
import AppDataSource from '../DataSource';

import DBUser from "./User";

class UserRepository extends CRUDRepository<User, DBUser> implements DomainUserRepository {

    constructor() {
        super(AppDataSource.getRepository(DBUser));
    }

}

export { DBUser };
export default UserRepository;