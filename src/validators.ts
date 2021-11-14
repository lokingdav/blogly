import mongoose from 'mongoose';
import { ValidationRule, StringOrNumber } from './types';

/**
 * Finds a document
 *
 * @param {String} collection collection to use
 * @param {String} property field on collection
 * @param {string} value value to check
 * @param {Function} callback callback that usually resolves to true/false
 * @returns {void}
 */
const findDocument: Function = (collection: string, property: string, value: StringOrNumber, callback: Function): void => {
    mongoose.models[collection].findOne({[property]: value}, callback);
}

/**
 * Checkes if given field & value are unique in given collection
 *
 * @param {String} collection
 * @param {String} property
 * @returns {Function}
 */
export const unique: ValidationRule = (collection: string, property: string): Function => {
    return (value: StringOrNumber): Promise<boolean> => new Promise((resolve: Function) => {
        findDocument(collection, property, value, (err: any, document: Document) => resolve(!document));
    });
}

/**
 * Checkes if given field & value exists in given collection
 *
 * @param {String} collection
 * @param {String} property
 * @returns {Function}
 */
export const exists: ValidationRule = (collection: string, property: string): Function => {
    return (value: StringOrNumber): Promise<boolean> => new Promise((resolve: Function) => {
        findDocument(collection, property, value, (err: any, document: Document) => resolve(!!document));
    });
}
