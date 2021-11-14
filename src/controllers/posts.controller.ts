import {Request, Response} from 'express';
import { HTTP_CODES, RouteAction } from '../types';

import PostService from './../services/post';

/**
 * List all blog posts
 *
 * @param {Request} request request object
 * @param {Response} response response object
 */
export const index: RouteAction = async (request: Request, response: Response) => {
  PostService(request.authUser).index({...request.query, ...request.params})
    .then((data: any) => response.status(HTTP_CODES.CREATED).json(data))
    .catch((error: any) => response.status(HTTP_CODES.UNPROCESSABLE_ENTITY).json(error));
}

/**
 * Stores a new post
 *
 * @param {Request} request request object
 * @param {Response} response response object
 */
export const store: RouteAction = async (request: Request, response: Response) => {
  const { title, content } = request.body;
  const createdBy = request.authUser?._id;

  PostService(request.authUser).store({ title, content, createdBy })
    .then(post => response.status(HTTP_CODES.CREATED).json(post))
    .catch(error => response.status(HTTP_CODES.UNPROCESSABLE_ENTITY).json(error));
}