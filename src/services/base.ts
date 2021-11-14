import {Document, Error, Model} from 'mongoose';
import { buildModelValidationErrors } from '../helpers';
import { AuthUser } from '../types';

export default abstract class BaseService {
  /**
   * @type {Any}
   *
   * Holds model to be used
   */
  model: any;

  /**
   * @type {Any}
   *
   * Holds model to be used
   */
  authUser: any;

  /**
   * Service constructor
   *
   * @param {String} model model to be used
   */
  constructor(model: Model<any>, authUser?: AuthUser) {
    this.model = model;
    this.authUser = authUser;
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

  all(params: object = {}, populates: string[] = []): Promise<Document[]> {
    return new Promise((resolve, reject) => {
      const query = this.model.find(params);

      for (let field of populates) {
        const [path, select] = field.split(':');

        query.populate({path, select: select.split(',').join(' ')});
      }

      return query.exec((error: any, documents: Document[]) => resolve(documents));
    });
  }
}