// src/users/usersController.ts
import {
    Controller,
    Get,
    Route,
    Request,
    Response
} from "tsoa";
import { autoInjectable, inject } from "tsyringe";
import { Request as ExRequest, Response as ExResponse } from "express";

import Logger from "../../domain/ports/Logger";

@autoInjectable()
@Route("hello")
export class indexController extends Controller {
    constructor(@inject("Logger") private logger?: Logger) {
        super();
    }
    @Get()
    public async get(@Request() req: ExRequest): Promise<{message: string}> {
        this.logger?.warn(`This is warn`, {service: req.path, functionName: "get hello"});
        this.logger?.info(`This is an info`, {service: req.path, functionName: "get hello"});
        return {
            message: "hello world"
        };
    }

}
