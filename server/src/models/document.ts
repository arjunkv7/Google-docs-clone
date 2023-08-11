import mongoose, { Schema } from 'mongoose';

let documentSchema = new Schema({
    documentId: String,
    data: Object
}, { timestamps: true });

export let model = mongoose.model('documents', documentSchema);

