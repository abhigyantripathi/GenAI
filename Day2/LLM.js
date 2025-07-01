import { GoogleGenAI } from "@google/genai";
import readlineSync from 'readline-sync';
const ai = new GoogleGenAI({apiKey:"AIzaSyAl0hbVm6g312InO60_x0hbb9bJKeS97GQ"});

const chat = ai.chats.create({
    model: "gemini-2.5-flash",
    history: [],
})
async function main(){

    const userProblem=readlineSync.question("Ask me anything -->");
    const response1=await chat.sendMessage({
      message:userProblem,
    })
    console.log(response1.text);
    main();
}

await main();