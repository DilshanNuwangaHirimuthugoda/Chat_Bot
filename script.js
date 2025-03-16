const API_KEY = 'API_KEY';
const API_URL =

const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');
async function generateResponse(prompt) {

    const response = await fetch('$(API_URL)?key=$(API_KEY)', {
        method : 'POST',

        headers : {
            'Content-Type' : 'application/json',
        },

        body : JSON.stringify({
            contents: [
                {
                    parts:[
                        {
                            text:prompt
                        }
                    ]
                }
            ]
        })
    });
    
    if(!response.ok){
        throw new Error('Failed to generate response');

    }

    const data = await response.json();
    return data.candidates[0].content.parts[0].text;

}
function cleanMarkdown(text){
    return text
        .replace(/#{1,6}\s?/g, '')
        .replace(/\*\*/g, '')
        .replace(/\n{3,}/g, '\n\n')
        .trim();

}