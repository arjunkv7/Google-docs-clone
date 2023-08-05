import mongoose, { Schema } from 'mongoose';

let documentSchema = new Schema({
    data: Array
});

let model = mongoose.model('documents', documentSchema);
export default model

