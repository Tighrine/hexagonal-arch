import { Request as ExRequest } from 'express';
import { Controller, Get, Request, Route } from 'tsoa';
import { autoInjectable, inject } from 'tsyringe';
import Logger from '../../domain/ports/Logger';
import HealthCheck, { Health } from '../../domain/application/HealthChecks';

@autoInjectable()
@Route("health")
export class healthController extends Controller {
    constructor(@inject("Logger") private logger?: Logger) {
        super();
    }

    @Get()
    public async get(@Request() req: ExRequest): Promise<Health> {
        const healthCheck = new HealthCheck();
        const response = await healthCheck.execute();

        this.logger?.info(`Health check response: ${JSON.stringify(response)}`, {
            service: req.path,
            functionName: "get health"
        })
        return response;
    }
}