# DN_Chatbot

DN_Chatbot is a simple AI-powered chatbot built using HTML, CSS, and JavaScript. It uses Google's Gemini AI API to generate responses based on user input.

## Features
- Interactive chatbot UI
- AI-generated responses using Google Gemini AI
- User and bot message display with profile images
- Markdown cleaning for better response readability
- Keyboard support (press **Enter** to send messages)

## Demo
You can view the live demo of the app [here](https://dilshannuwangahirimuthugoda.github.io/Chat_Bot/) 



## Technologies Used
- HTML
- CSS
- JavaScript
- Google Gemini AI API

## Setup Instructions

### Prerequisites
- A web browser (Chrome, Firefox, Edge, etc.)
- A text editor (VS Code, Sublime Text, etc.)
- Internet connection

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/dn_chatbot.git
   ```

2. Navigate to the project folder:
   ```bash
   cd dn_chatbot
   ```

3. Open `index.html` in a web browser.

## API Configuration
This chatbot uses the **Google Gemini AI API**. To configure it:
1. Replace the `API_KEY` in `script.js` with your actual API key:
   ```javascript
   const API_KEY = 'your-api-key-here';
   ```
2. Ensure the API key has permissions to access the Google Gemini AI API.

## File Structure
```
📂 dn_chatbot
├── 📄 index.html      # Main chatbot UI
├── 📄 styles.css      # Chatbot styling
├── 📄 script.js       # Chatbot functionality
└── 📄 README.md       # Project documentation
```

## Usage
- Type your message in the input field and click the **Send** button or press **Enter**.
- The chatbot will respond with an AI-generated message.

## Troubleshooting
- If the chatbot does not respond:
  - Check your internet connection.
  - Verify the API key in `script.js`.
  - Open the browser console (**F12** → Console) to check for errors.

## Contributing
Contributions are welcome! If you'd like to improve the chatbot, feel free to fork the repository and submit a pull request.

## License
This project is licensed under the MIT License.


