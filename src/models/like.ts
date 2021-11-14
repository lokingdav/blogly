import mongoose, {Schema} from 'mongoose';
import { MODEL_NAMES, LIKE_INTERFACE } from '../types';

const schema = new Schema<LIKE_INTERFACE>({
    post: {
        type: Schema.Types.ObjectId,
        ref: MODEL_NAMES.Post,
        required: true
    },

    user: {
        type: Schema.Types.ObjectId,
        ref: MODEL_NAMES.User,
        required: true
    }
},{
    timestamps: true
});

export default mongoose.model<LIKE_INTERFACE>(MODEL_NAMES.Like, schema)