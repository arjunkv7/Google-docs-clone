import mongoose, { Schema } from 'mongoose';

let documentSchema = new Schema({
    documentId: String,
    data: Object
}, { timestamps: true });

export let DocumentModel = mongoose.model('documents', documentSchema);

