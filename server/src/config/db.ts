import mongoose from "mongoose";

const MONGO_URL: string = process.env.DB_URL || "";
export const JWT_KEY = process.env.JWT_KEY || "";

if (MONGO_URL == "") {
    console.log('DB_URL is required in .env');
    process.exit()
}

export let connectToDatabase = () => {
    console.log(MONGO_URL)
    mongoose.connect(MONGO_URL)

        .then(() => console.log('Database connected successfully...'))
        .catch((err) => {
            console.log("Error connecting to database: ", err.message);
            process.exit();
        })

}
