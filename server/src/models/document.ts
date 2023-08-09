import mongoose, { Schema } from 'mongoose';

let documentSchema = new Schema({
    documentId: String,
    data: Object
}, { timestamps: true });

let model = mongoose.model('documents', documentSchema);
export default model

