// Imports the Google Cloud client library
import textToSpeech from '@google-cloud/text-to-speech';
import speech from '@google-cloud/speech';
import fs from 'fs';
import util from 'util';

const client = new textToSpeech.TextToSpeechClient();

const textToSpeechClient = new textToSpeech.TextToSpeechClient();
const speechClient = new speech.SpeechClient();

const detectLanguageAndConvertSpeech = async (audioFilePath) => {
  const audioBytes = fs.readFileSync(audioFilePath).toString('base64');
  
  // Configure the Speech-to-Text request with multi-language support
  const request = {
    audio: {
      content: audioBytes,
    },
    config: {
      encoding: 'LINEAR16', 
      sampleRateHertz: 16000, 
      languageCode: 'en', 
      alternativeLanguageCodes: ['hi-IN', 'en-US'], 
    },
  };

  // Detect the spoken language and transcribe the text
  const [response] = await speechClient.recognize(request);
  const transcription = response.results.map(result => result.alternatives[0].transcript).join('\n');
  const detectedLanguage = response.results[0].languageCode;

  console.log(`Transcription: ${transcription}`);
  console.log(`Detected Language: ${detectedLanguage}`);

  // Pass the transcription and detected language to Text-to-Speech
  await quickStart(transcription, detectedLanguage);
};

// Step 2: Convert Detected Text to Speech Using Text-to-Speech
const quickStart = async (text, language) => {
  const voiceConfig = {
    'en-US': { languageCode: 'en-US', ssmlGender: 'NEUTRAL' },
    'hi-IN': { languageCode: 'hi-IN', ssmlGender: 'NEUTRAL' },
  };

  const selectedVoice = voiceConfig[language] || voiceConfig['en-US'];
  const request = {
    input: { text: text },
    voice: selectedVoice,
    audioConfig: { audioEncoding: 'MP3' },
  };

  const [response] = await textToSpeechClient.synthesizeSpeech(request);
  const writeFile = util.promisify(fs.writeFile);
  const outputFile = `${language}_output.mp3`;
  await writeFile(outputFile, response.audioContent, 'binary');
  console.log(`Audio content written to file: ${outputFile}`);
};

// Example usage: Pass in your audio file path here
detectLanguageAndConvertSpeech('path/to/your/audiofile.wav');
