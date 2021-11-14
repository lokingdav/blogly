import { Request, Response } from 'express';
import UserService from '../services/user';
import { HTTP_CODES, RouteAction } from '../types';

/**
 * Creates an account for a new user.
 *
 * @param {Request} request request object
 * @param {Response} response response object
 */
export const register: RouteAction = async (request: Request, response: Response) => {
  const {username, firstname, lastname, email, password} = request.body;

  UserService(request.authUser).register({username, firstname, lastname, email, password})
    .then(user => response.status(HTTP_CODES.CREATED).json(user))
    .catch(error => response.status(HTTP_CODES.UNPROCESSABLE_ENTITY).json(error));
}

/**
 * Logs in a user.
 *
 * @param {Request} request request object
 * @param {Response} response response object
 */
export const login: RouteAction = async (request: Request, response: Response) => {
  const {username, password} = request.body;

  UserService(request.authUser).login({username, password})
    .then(data => response.status(HTTP_CODES.OK).json(data))
    .catch(error => response.status(HTTP_CODES.UNAUTHENTICATED).json(error));
}

/**
 * Sends a reset password email to user
 *
 * @param {Request} request request object
 * @param {Response} response response object
 */
export const resetPassword: RouteAction = async (request: Request, response: Response) => {
  response.send("reset password");
}