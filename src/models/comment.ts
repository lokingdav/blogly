import mongoose, {Schema} from 'mongoose';
import { MODEL_NAMES, COMMENT_INTERFACE, AuthUser } from '../types';
import { exists } from '../validators/rules';

const schema = new Schema<COMMENT_INTERFACE>({
    post: {
        type: Schema.Types.ObjectId,
        ref: MODEL_NAMES.Post,
        validate: [exists(MODEL_NAMES.Post, '_id'), 'Post does not exist']
    },

    user: {
        type: Schema.Types.ObjectId,
        ref: MODEL_NAMES.User,
        validate: [exists(MODEL_NAMES.User, '_id'), 'User does not exist']
    },

    content: String
},{
    timestamps: true
});


export default mongoose.model<COMMENT_INTERFACE>(MODEL_NAMES.Comment, schema);