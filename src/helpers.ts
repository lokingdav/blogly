import {Error} from 'mongoose';
import { HTTP_ERROR, HTTP_CODES } from './types';

/**
 * Transforms mongoose database validation error
 *
 * @param error mongoose error
 * @param data other data to send
 * @returns {HTTP_ERROR}
 */
export const buildModelValidationErrors = (error: Error.ValidationError, data: any = null): HTTP_ERROR => {
    const messages: any = {};

    for (const key of Object.keys(error.errors)) {
        messages[key] = error.errors[key].message;
    }

    return {
        status: HTTP_CODES.UNPROCESSABLE_ENTITY,
        message: 'The given data was invalid',
        errors: messages,
        data
    };
}

/**
 * Builds validation error
 *
 * @param {Object} errors errors to be sent
 * @returns {Object}
 */
export const buildValidationError = (errors: object) => {
    return {
        status: HTTP_CODES.UNPROCESSABLE_ENTITY,
        message: 'The given data was invalid',
        errors: errors,
        data: null
    };
}