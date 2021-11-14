import mongoose, {Schema} from 'mongoose';
import { MODEL_NAMES, POST_INTERFACE } from '../types';

const schema = new Schema<POST_INTERFACE>({
    title: {
        type: String,
        required: true
    },

    content: {
        type: String,
        required: true
    },

    createdBy: {
        type: Schema.Types.ObjectId,
        ref: MODEL_NAMES.User,
        required: true
    }
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

schema.virtual('recentComments', {
    ref: MODEL_NAMES.Comment,
    localField: '_id',
    foreignField: 'post',
    perDocumentLimit: 5
});

schema.virtual('likes', {
  ref: MODEL_NAMES.Like,
  localField: '_id',
  foreignField: 'post',
  count: true
});

export default mongoose.model<POST_INTERFACE>(MODEL_NAMES.Post, schema);
