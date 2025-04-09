# Modern Quiz App

A modern, interactive quiz application with a leaderboard feature. Test your knowledge across various topics including geography, science, history, and more!

## Features

- 20 diverse questions covering multiple topics
- Real-time score tracking
- Leaderboard to track high scores
- Modern and responsive UI
- Timer-based questions
- Immediate feedback on answers

## Topics Covered

- Geography
- Science
- History
- Literature
- Art
- Technology
- Nature
- And more!

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
```

2. Navigate to the project directory:
```bash
cd quiz-app
```

3. Install dependencies:
```bash
npm install
```

## Running the Application

### Local Development
```bash
npm run dev
```
This will start the server with nodemon for automatic reloading during development.

### Production
```bash
npm start
```

The application will be available at:
```
http://localhost:3000
```

## Hosting Instructions

### 1. Choose a Hosting Provider
The application can be hosted on any platform that supports Node.js, such as:
- Heroku
- DigitalOcean
- AWS
- Google Cloud Platform
- Vercel
- Railway

### 2. Environment Setup
- Set the `PORT` environment variable (most platforms will do this automatically)
- Ensure the platform has Node.js v14 or higher installed

### 3. Database
- The application uses SQLite, which is file-based
- Make sure your hosting platform supports persistent storage
- The database file will be created automatically at `quiz.db`

### 4. Deployment Steps
1. Push your code to the hosting platform
2. Install dependencies: `npm install`
3. Start the application: `npm start`

### 5. Health Check
The application includes a health check endpoint:
```
GET /health
```
This can be used to verify the server is running correctly.

## How to Play

1. Click the "Start Quiz" button to begin
2. Read each question carefully
3. Select your answer from the provided options
4. You'll receive immediate feedback on whether your answer was correct
5. Your score will be tracked throughout the quiz
6. At the end, you can enter your name to be added to the leaderboard

## Technical Details

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js with Express
- Database: SQLite
- Dependencies:
  - express: ^4.18.2
  - cors: ^2.8.5
  - sqlite3: ^5.1.7

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the MIT License.
# Quiz-Application
