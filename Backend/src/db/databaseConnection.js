import mongoose from "mongoose";

const databaseConnection = async () => {
    try {
        const dbConnection =  await mongoose.connect(`${process.env.MONGODB_URI}/talkToME`);
        console.log(`\n MongoDB connected !! DB HOST: ${dbConnection.connection.host}`);
        
    } catch (error) {
        console.log("Database connection failed...",error)
    }
}

export default databaseConnection;