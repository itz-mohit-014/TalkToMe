import express from 'express'
import dotenv from 'dotenv';
import cors from 'cors'
import userMessage from './src/Routes/route.js';
import databaseConnection from './src/db/databaseConnection.js';
import path from 'path';
import fs from 'fs';

dotenv.config({
    path:"./.env"
});

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin:"*"
}))

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const uploadsDir = 'uploads';
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
}

// route 
app.use("/api/v1", userMessage);
app.use('/uploads', express.static('public'));


// handleing middleware.
app.use((err, req, res, next) => {
    if (err instanceof multer.MulterError) {
        if (err.code === 'LIMIT_FILE_SIZE') {
            return res.status(400).json({
                success: false,
                message: 'File is too large. Maximum size is 10MB'
            });
        }
        return res.status(400).json({
            success: false,
            message: err.message
        });
    } else if (err) {
        return res.status(500).json({
            success: false,
            message: err.message
        });
    }
    next();
});

databaseConnection()
.then(() => {
    app.listen(process.env.PORT || 5000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})