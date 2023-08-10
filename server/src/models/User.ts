import mongoose, { Schema, Document } from 'mongoose';

export interface userDoc extends Document {
    firstName: string
    lastName: string
    userName: string
    password: string
}

let userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: String,
    userName: { type: String, required: true },
    password: { type: String, required: true }
}, { timestamps: true });

let UserModel = mongoose.model<userDoc>('users', userSchema);

export default UserModel;