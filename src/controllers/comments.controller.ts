import {Request, Response} from 'express';
import { RouteAction } from '../types';

/**
 * list all comments for given post
 *
 * @param request request object
 * @param response response object
 */
export const index: RouteAction = async (request: Request, response: Response) => {
  response.json([{id: 1, title: 'Comment 1'}, {id: 2, title: 'Comment 2'}]);
}

/**
 * Stores a new comment
 *
 * @param {Request} request request object
 * @param {Response} response response object
 */
export const store: RouteAction = async (request: Request, response: Response) => {
  response.json({id: 1, title: 'Comment 1'});
}