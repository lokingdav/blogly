import BaseService from './base';
import { Document } from 'mongoose';
import PostModel from '../models/post';
import { AuthUser, UserRegistrationData } from '../types';

class PostService extends BaseService {
    /**
     * Construct user service and base service
     *
     * @param {String} model
     */
    constructor(authUser?: AuthUser) {
        super(PostModel, authUser);
    }

    /**
     * Get listing of posts
     *
     * @param {Object} params params to be used as filters
     * @returns {Promise<Document[]>}
     */
    async index(params: object) {
        return this.all(/* filters */ params, /* populates */ ['createdBy:_id,username']);
    }
}

export default (authUser?: AuthUser) => new PostService(authUser);