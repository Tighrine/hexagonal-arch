import { DataSource } from 'typeorm';
import DomainDatabase from "../../../domain/ports/Database";
import { ServiceStatus } from "../../../utils/Types";
import AppDataSource from './DataSource';

export default class Database implements DomainDatabase {
    private dataSource: DataSource;

    constructor() {
        this.dataSource = AppDataSource
    }

    async ping(): Promise<ServiceStatus> {
        if(!this.dataSource.isInitialized){
            return {
                status: 'unhealthy',
                message: 'Unable to initialize data base connection'
            };
        }

        return { status: 'healthy' };
    }

} 