import mongoose from "mongoose";

const MONGO_URL: string = "mongodb+srv://Arjunroot:TsK6It1f4HvMdGwM@cluster0.scesfd7.mongodb.net/googleDocs";
export const JWT_KEY = "th*&3oiudslkj&&^&#ljklfjsd"

export let connectToDatabase = () => {
    mongoose.connect(MONGO_URL)
        .then(() => console.log('Database connected successfully...'))
        .catch((err) => console.log("Error connecting to database: ", err.message));
}
