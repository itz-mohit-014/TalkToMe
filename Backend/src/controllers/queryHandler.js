import asyncHandler from "../Services/AsyncHandler.js";
import { GoogleGenerativeAI }  from "@google/generative-ai";

const queryHandler = asyncHandler( async (req, res) => {
  try {
    const { prompt } = req.body;
    
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const result = await model.generateContent(prompt);
    console.log(result.response.text());
    console.log(prompt);
    
    return res.json({
        prompt,
        solution:result.response.text()
    });

} catch (error) {
    console.log(error)
    return res.json({body:error});
    
  }
});




export default queryHandler;
