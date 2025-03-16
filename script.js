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