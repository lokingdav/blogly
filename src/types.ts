import {Request, Response, NextFunction} from 'express';
import { SchemaType } from 'mongoose';

export type StringOrNumber = string | number;

export interface AuthUser {
    _id: string,
    username: string,
    email: string
}

export interface UserRegistrationData {
    username: string,
    firstname: string,
    lastname: string,
    email: string,
    password: string
}

export enum MODEL_NAMES{
    User = 'User',
    Post = 'Post',
    Comment = 'Comment',
    Like = 'Like'
}

export interface USER_INTERFACE {
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
};

export interface POST_INTERFACE {
    title: string;
    content: string;
    createdBy: Object;
};

export interface LIKE_INTERFACE {
    post: Object;
    user: Object;
};

export interface COMMENT_INTERFACE {
    post: Object;
    user: Object;
    content: string;
};

export enum HTTP_CODES {
    OK = 200,
    CREATED = 201,
    NOT_FOUND = 404,
    UNPROCESSABLE_ENTITY = 422,
    INTERNAL_SERVER_ERROR = 500,
    FORBITDEN = 403,
    UNAUTHORIZED = 401,
    UNAUTHENTICATED = 401
}

export interface HTTP_ERROR {
    status: HTTP_CODES;
    message: string;
    errors: Object,
    data: any
}

export type ValidationRule = (model: string, field: string) => Function;

export type Middleware = (request: Request, response: Response, next: NextFunction) => any;

export type RouteAction = (request: Request, response: Response) => any;