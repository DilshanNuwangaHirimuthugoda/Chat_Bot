// API Key and URL for Google Gemini AI (Keep API keys secure and avoid exposing them in frontend code)
const API_KEY = 'AIzaSyB3QEHTQTw5hCwQ_j6uZrX27n2BaXSosOY';
const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent"; 

// Get references to HTML elements
const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

// Function to generate a response from the API
async function generateResponse(prompt) {
    try {
        // Send a POST request to the API with the user's input
        const response = await fetch(`${API_URL}?key=${API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [{ text: prompt }] // User's input
                    }
                ]
            })
        });

        // Check if the response is successful
        if (!response.ok) {
            const errorText = await response.text();
            console.error('API Error:', errorText);
            throw new Error(`Failed to generate response: ${errorText}`);
        }

        // Parse the response JSON and extract the generated text
        const data = await response.json();
        console.log('API Response:', data); // Debugging

        // Check if the response contains a valid AI-generated response
        if (!data.candidates || data.candidates.length === 0) {
            throw new Error('No candidates found in response');
        }

        // Return the AI-generated text response
        return data.candidates[0].content.parts[0].text;
    } catch (error) {
        console.error('Error:', error);
        return 'Sorry, I could not generate a response. Please try again later.';
    }
}

// Function to clean up the generated Markdown text
function cleanMarkdown(text) {
    return text.replace(/#{1,6}\s?/g, '')   // Remove markdown headings
               .replace(/\*\*/g, '')     // Remove bold formatting
               .replace(/\n{3,}/g, '\n\n')  // Replace multiple newlines with double newline
               .trim();
}

// Function to add a message to the chat window
function addMessage(message, isUser) {
     // Create a new message container div
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', isUser ? 'user-message' : 'bot-message');

    // Create an image element for the user/bot profile picture
    const profileImage = document.createElement('img');
    profileImage.classList.add('profile-image');
    profileImage.src = isUser ? 'user.png' : 'bot.png'; // Change the image source based on user/bot
    profileImage.alt = isUser ? 'User' : 'Bot';

     // Create a div to hold the message text
    const messageContent = document.createElement('div');
    messageContent.classList.add('message-content');
    messageContent.innerText = message;

    // Append profile image and text to the message container
    messageElement.appendChild(profileImage);
    messageElement.appendChild(messageContent);
     // Append the message container to the chat messages area
    chatMessages.appendChild(messageElement);
    // Auto-scroll chat window to show the latest message
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Function to handle user input and generate a response
async function handleUserInput() {
    const userMessage = userInput.value.trim(); // Get and trim the user input
    
    if (userMessage) {
        addMessage(userMessage, true);// Display user message in chat
        // Clear input field and disable input to prevent multiple requests
        userInput.value = '';
        sendButton.disabled = true;
        userInput.disabled = true;

        try {
            // Get AI response and display it
            const botMessage = await generateResponse(userMessage);
            addMessage(cleanMarkdown(botMessage), false);
        } catch (error) {
            console.error('Error:', error);
            addMessage('Sorry, I could not generate a response. Please try again later.', false);
        } finally {
            // Re-enable input and button after response is received
            sendButton.disabled = false;
            userInput.disabled = false;
            userInput.focus();
        }
    }
}

// Event listener for the send button click
sendButton.addEventListener('click', handleUserInput);
// Event listener for pressing "Enter" in the input field (without Shift)
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault(); // Prevent new line in input field
        handleUserInput();
    }
});
