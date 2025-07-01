import { GoogleGenAI } from "@google/genai";
import readlineSync from 'readline-sync';
const ai = new GoogleGenAI({apiKey:"AIzaSyAl0hbVm6g312InO60_x0hbb9bJKeS97GQ"});


const History = []
async function chatting(userProblem) {

    History.push({
        role:'user',
        parts:[{text:userProblem}]
    })


  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: History,
  });

  History.push({
        role:'model',
        parts:[{text:response.text}]
    })
    console.log("\n");
  console.log(response.text);
}

async function main(){

    const userProblem=readlineSync.question("Ask me anything -->");
    await chatting(userProblem);
    main();
}

await main();