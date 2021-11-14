import BaseService from './base';
import { Document } from 'mongoose';
import UserModel from '../models/user';
import { AuthUser, UserRegistrationData } from '../types';
import { buildValidationError } from '../helpers';

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class UserService extends BaseService {
    /**
     * Construct user service and base service
     *
     * @param {AuthUser} authUser
     */
    constructor(authUser?: AuthUser) {
        super(UserModel, authUser);
    }

    /**
     * Register new user
     *
     * @param {UserRegistrationData} data data to register user
     * @returns {Promise<Document>}
     */
    async register(data: UserRegistrationData): Promise<Document> {
        if (!data.password) {
            return Promise.reject(buildValidationError({password: ['Password is required']}));
        }

        data.password = bcrypt.hashSync(data.password, 8);

        try {
            const user = await this.store(data);

            return Promise.resolve(user);
        } catch (error) {
            console.log(error);

            return Promise.reject(error);
        }
    }

    /**
     * Login user and create token
     *
     * @param {Any} credentials login credentials
     * @returns {Promise<Object>}
     */
    async login(credentials: any): Promise<Object> {
        const user = await this.model.findOne({username: credentials.username}).lean();

        if (!user || !bcrypt.compareSync(credentials.password, user.password)) {
            return Promise.reject({message: 'Authentication failed'})
        };

        try {
            const {_id, username, email} = user;
            const token: string = jwt.sign({_id, username, email}, process.env.TOKEN_KEY, { expiresIn: "2h"});
            const data: {token: string, user: Document} = {token, user};

            return Promise.resolve(data);
        } catch (error) {
            console.log(error);
            return Promise.reject({message: `Something unexpected happened. Try again later`});
        }
    }
}

export default (authUser?: AuthUser) => new UserService(authUser);