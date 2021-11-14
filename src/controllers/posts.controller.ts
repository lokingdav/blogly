import {Request, Response} from 'express';
import { RouteAction } from '../types';

/**
 * List all blog posts
 *
 * @param {Request} request request object
 * @param {Response} response response object
 */
export const index: RouteAction = async (request: Request, response: Response) => {
  response.json({auth: !!request.auth});
}

/**
 * Stores a new post
 *
 * @param {Request} request request object
 * @param {Response} response response object
 */
export const store: RouteAction = async (request: Request, response: Response) => {
  response.json(request.auth);
}