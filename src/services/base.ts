import {Document, Error} from 'mongoose';
import { buildModelValidationErrors } from '../helpers';

export default abstract class BaseService {
  /**
   * @type {Any}
   *
   * Holds model to be used
   */
  model: any;

  /**
   * Service constructor
   *
   * @param {String} model model to be used
   */
  constructor(model?: any) {
    this.model = model;
  }

  /**
   * Stores model instance
   *
   * @param {Object} data data to be stored
   * @returns {Promise<Document>} inserted document
   */
  store(data: object): Promise<Document> {
    return new Promise((resolve, reject) => {
      const model = new this.model(data);

      model.save((error: any, document: Document) => {
        if (error) {
          if (error instanceof Error.ValidationError) {
            return reject(buildModelValidationErrors(error));
          }
          return reject(error);
        }

        return resolve(document);
      });
    })
  }
}