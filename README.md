# StarBrain AI

An intelligent chatbot built with Gemini API and React.js. Designed for seamless interaction and smart responses, **StarBrain AI** delivers an engaging user experience with cutting-edge conversational AI.

## Features

- Interactive and user-friendly chat interface.
- Utilizes the Gemini API for advanced conversational AI capabilities.
- Provides quick, intelligent, and context-aware responses.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (version 14 or later)
- A Gemini API key (refer to the [Get an API Key](#get-an-api-key) section below).

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Pushkaraj-Palli/StarBrain-AI.git
   ```

2. Navigate to the project directory:

   ```bash
   cd StarBrain-AI
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Set up your API key in the environment variables:

   ```bash
   const api_key = "Place your API key here";
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

## Usage

1. Open the chat interface in your browser.
2. Type your query or message in the input box.
3. Press click the **Send** button to interact with StarBrain AI.
4. Enjoy smart and insightful responses.

## Get an API Key

To use this application, you need an API key from Gemini. Follow these steps to obtain your API key:

1. Go to the [Gemini API Portal](https://ai.google.dev/gemini-api/docs).
2. Sign up for an account or log in if you already have one.
3. Navigate to the API section and create a new API key.

## Project Structure

```
├── public
│
├── src
|   ├── assets
│   ├── components
│   │   ├── Main
│   │   └── SideBar
│   |
|   ├── config
|   |      └── AI.js    //Place Your API key
│   ├── Context
|   |   └── Context.jsx
|   |
│   ├── App.jsx
|   ├── index.css
│   └── main.jsx
```

## Screenshots

### Chat Interface

![image2](https://github.com/user-attachments/assets/9f849214-8a6e-4c84-81a4-5251f54bc54e)
![home](https://github.com/user-attachments/assets/94b40481-f317-40db-8b69-7982cd703bbe)
![image1](https://github.com/user-attachments/assets/3d01cec9-5bda-4ed3-9b3a-e05fe84c4c95)

## Technologies Used

- **React.js**: For building the user interface.
- **Gemini API**: To handle AI-based conversational responses.
- **CSS**: For styling the application.

---

Start chatting with StarBrain AI today and experience the future of intelligent conversations!
