import mongoose, {Schema, model, Document} from 'mongoose';
import { MODEL_NAMES, USER_INTERFACE } from '../types';
import { unique } from '../validators/rules';

const schema = new Schema<USER_INTERFACE>({
    username: {
        type: String,
        unique: true,
        required: [true, 'Username is required'],
        minlength: [6, 'Username must be at least 6 characters long'],
        validate: [unique(MODEL_NAMES.User, 'username'), 'The username is already in use']
    },

    email: {
        type: String,
        unique: true,
        required: [true, 'Email is required'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'The email address is invalid'],
        validate: [unique(MODEL_NAMES.User, 'email'), 'The email address is already in use']
    },

    firstname: {
        type: String,
        required: [true, 'Firstname is required']
    },

    lastname: {
        type: String,
        required: [true, 'Lastname is required']
    },

    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'Password must be at least 6 characters long']
    },
},
{
    timestamps: true
});

schema.index({username: 1, email: 1}, {unique: true});

export default model<USER_INTERFACE>(MODEL_NAMES.User, schema);