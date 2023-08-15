import mongoose, { Schema } from 'mongoose';

let documentSchema = new Schema({
    documentId: { type: String, required: true },
    data: Object,
    creator: { type: String, required: true },
    editors: [String]
}, { timestamps: true });

export let DocumentModel = mongoose.model('documents', documentSchema);

