// controllers/chatController.js
import asyncHandler from 'express-async-handler';
import speech from '@google-cloud/speech';
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { Chat } from '../Models/chat.model.js';

// Initialize Google Speech-to-Text client
const speechClient = new speech.SpeechClient();

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const answerToVoiceMessage = asyncHandler(async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: 'No audio file provided'
            });
        }

        const chatId = req.params.chatId;
        const audioFilePath = req.file.path;

        // 1. Convert audio to text using Speech-to-Text

        

        // const audioBytes = fs.readFileSync(audioFilePath).toString('base64');
        
        // const speechRequest = {
        //     audio: {
        //         content: audioBytes,
        //     },
        //     config: {
        //         encoding: 'LINEAR16',
        //         sampleRateHertz: 16000,
        //         languageCode: 'en',
        //         alternativeLanguageCodes: ['hi-IN', 'en-US'],
        //     },
        // };

        // const [speechResponse] = await speechClient.recognize(speechRequest);
        // const prompt = speechResponse.results
        //     .map(result => result.alternatives[0].transcript)
        //     .join('\n');
        // const detectedLanguage = speechResponse.results[0].languageCode;

        // 2. Get response from Gemini AI
        const result = await model.generateContent(prompt);
        const aiResponse = result.response.text();

        if(!aiResponse){
          res.status(403).json({ message: "Please try again leter.", success:false, chat:null })
        }

        // 3. Save conversation in database
        const chat = await Chat.findById(chatId);
        if (!chat) {
            return res.status(404).json({
                success: false,
                message: 'Chat not found'
            });
        }
        const message = {
          prompt,
          solution:aiResponse
        }
    
        // Add user's voice message (converted to text)
        chat.messages.push(message);
        await chat.save();

        // 4. Clean up original uploaded file
        fs.unlink(audioFilePath, (err) => {
            if (err) console.error('Error deleting original audio file:', err);
        });

        // 5. Send response
        return res.status(200).json({ message: "Message added successfully.", chat });;

    } catch (error) {
        console.error('Error processing voice command:', error);
        return res.status(500).json({
            success: false,
            message: 'Error processing voice command',
            error: error.message
        });
    }
});

export default  answerToVoiceMessage ;