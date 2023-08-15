import mongoose, { Schema, Document } from 'mongoose';
import { Password } from '../utils/password';

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

userSchema.pre('save', async function (next) {
    let user = this;
    if (user.isModified('password')) user.password = await Password.hashPassword(this.password)
})

export let UserModel = mongoose.model<userDoc>('users', userSchema);