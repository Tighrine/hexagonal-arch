import { AddressRepository as DomainAddressRepository } from './../../../../domain/ports/Repositories';
import { Address } from "../../../../domain/application/entities";
import CRUDRepository from "../CRUDRepository";
import AppDataSource from '../DataSource';

import DBAddress from "./Address";

class AddressRepository extends CRUDRepository<Address, DBAddress> implements DomainAddressRepository {
    constructor() {
        super(AppDataSource.getRepository(DBAddress));
    }
}

export { DBAddress };
export default AddressRepository;