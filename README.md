# AI Chatbot

## Overview
This is an AI-powered chatbot that allows users to ask questions and receive answers in real-time. The chatbot also maintains a history of all question-answer interactions, providing users with a seamless conversational experience.

## Features
- **Real-time Question Answering**: Users can ask any question and receive instant responses.
- **Chat History Storage**: All interactions are stored, allowing users to view their previous conversations.
- **User-friendly Interface**: Built with a clean and interactive UI.
- **AI-powered Responses**: Uses the Gemini Pro model for intelligent and context-aware responses.

## Tech Stack
- **Frontend**: React.js
- **Backend**: FastAPI (Python)
- **AI Model**: Gemini Pro

## Installation & Setup
### Prerequisites
Ensure you have the following installed:
- Node.js & npm
- Python & pip
- FastAPI
- React.js

### Clone the Repository
```sh
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### Backend Setup (FastAPI)
1. Navigate to the backend folder:
   ```sh
   cd backend
   ```
2. Create a virtual environment and activate it:
   ```sh
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```
3. Install dependencies:
   ```sh
   pip install -r requirements.txt
   ```
4. Run the FastAPI server:
   ```sh
   uvicorn main:app --reload
   ```

### Frontend Setup (React.js)
1. Navigate to the frontend folder:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the React development server:
   ```sh
   npm start
   ```

## Usage
1. Open the frontend in your browser (usually `http://localhost:3000`).
2. Enter your question in the chat interface.
3. Get an instant AI-generated response.
4. View your chat history for past interactions.

## Contributing
Feel free to contribute to this project by submitting issues or pull requests.

## License
This project is licensed under the MIT License.

---
Made with ❤️ using React, FastAPI, and Gemini Pro.

