import BaseService from './base';
import { Document } from 'mongoose';
import UserModel from '../models/user';
import { UserRegistrationData } from '../types';

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class UserService extends BaseService {
    /**
     * Construct user service and base service
     *
     * @param {String} model
     */
    constructor() {
        super(UserModel);
    }

    /**
     * Register new user
     *
     * @param {UserRegistrationData} data data to register user
     * @returns {Promise<Document>}
     */
    async register(data: UserRegistrationData): Promise<Document> {
        data.password = bcrypt.hashSync(data.password, 8);

        return this.store(data);
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
            return Promise.reject({message: `Something unexpected happened. Try again later`});
        }
    }
}

export default new UserService;