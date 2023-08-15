import bcrypt from 'bcryptjs';

export class Password {

    static async hashPassword(pass: string): Promise<string> {
        let salt = await bcrypt.genSalt(10);
        let hash = await bcrypt.hash(pass, salt);
        return hash;
    }

    static async comparePassword(password: string, hash: string): Promise<boolean> {
        return await bcrypt.compare(password, hash)
    }
}