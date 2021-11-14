import {Request, Response, NextFunction} from 'express';
import { HTTP_CODES, Middleware } from './types';
const jwt = require("jsonwebtoken");

export const auth: Middleware = (request: Request, response: Response, next: NextFunction) => {
    const errorResponse = {message: 'Unauthenticated'};

    const authorization = request.headers.authorization;

    if (!authorization || authorization === 'null') {
        return response.status(HTTP_CODES.UNAUTHENTICATED).json(errorResponse)
    }

    const token = authorization.split(' ').pop();

    try {
        jwt.verify(token, process.env.TOKEN_KEY, (err: any, user: any) => {
            if (err) return response.status(HTTP_CODES.UNAUTHENTICATED).json(errorResponse);

            request.auth = user;

            next();
        });
    } catch (err) {
        return response.status(HTTP_CODES.UNAUTHENTICATED).json(errorResponse);
    }

    return next();
}