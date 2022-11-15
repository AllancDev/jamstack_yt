import { model, Schema } from 'mongoose';

export const Order = model('order', new Schema({
    table: {
        required: true,
        type: String
    },
    status: {
        type: String,
        enum: ['WAITING', 'IN_PRODUCTION', 'DONE'],
        default: 'WAITING',
    },
    created_at: {
        type: Date,
        default: Date.now
    },

    products: {
        required: true,
        type: [{
            product: {
                type: Schema.Types.ObjectId,
                required: true,
                ref: 'product'
            },

            quantity: {
                type: Number,
                default: 1,
            }
        }]
    }
}));
