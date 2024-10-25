import express from 'express'
import dotenv from 'dotenv';
import cors from 'cors'
import userMessage from './src/Routes/route.js';
import databaseConnection from './src/db/databaseConnection.js';

dotenv.config({
    path:"./.env"
});

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin:"*"
}))

app.use(express.json());

// route 
app.use("/api/v1", userMessage);

databaseConnection()
.then(() => {
    app.listen(process.env.PORT || 5000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})