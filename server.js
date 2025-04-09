const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;

// Request logging middleware
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
});

// Middleware
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}));
app.use(express.json());

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

// Database setup
const dbPath = path.join(__dirname, 'quiz.db');
console.log('Database path:', dbPath);

// Ensure the database directory exists
const dbDir = path.dirname(dbPath);
if (!fs.existsSync(dbDir)) {
    fs.mkdirSync(dbDir, { recursive: true });
}

// Check if database file exists
if (!fs.existsSync(dbPath)) {
    console.log('Database file does not exist, creating new database...');
}

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening database:', err);
    } else {
        console.log('Connected to the SQLite database.');
        // Create scores table if it doesn't exist
        db.run(`CREATE TABLE IF NOT EXISTS scores (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT NOT NULL,
            score INTEGER NOT NULL,
            date DATETIME DEFAULT CURRENT_TIMESTAMP
        )`, (err) => {
            if (err) {
                console.error('Error creating table:', err);
            } else {
                console.log('Scores table created or already exists');
            }
        });
    }
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// API Routes
app.post('/api/scores', (req, res) => {
    console.log('Received POST request to /api/scores:', req.body);
    const { username, score } = req.body;
    
    if (!username || typeof score !== 'number') {
        console.log('Invalid input:', { username, score });
        return res.status(400).json({ error: 'Invalid input' });
    }

    db.run('INSERT INTO scores (username, score) VALUES (?, ?)', [username, score], function(err) {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Failed to save score' });
        }
        console.log('Score saved successfully:', { id: this.lastID, username, score });
        res.json({ id: this.lastID, username, score });
    });
});

app.get('/api/scores', (req, res) => {
    console.log('Received GET request to /api/scores');
    db.all('SELECT * FROM scores ORDER BY score DESC, date DESC LIMIT 10', [], (err, rows) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Failed to fetch scores' });
        }
        console.log('Returning scores:', rows);
        res.json(rows);
    });
});

// Serve the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Error occurred:', err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Handle 404 errors
app.use((req, res) => {
    res.status(404).json({ error: 'Not found' });
});

// Start server
const server = app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    console.log(`API endpoints available at:`);
    console.log(`  GET  http://localhost:${port}/api/scores`);
    console.log(`  POST http://localhost:${port}/api/scores`);
    console.log(`  GET  http://localhost:${port}/health`);
});

// Handle server shutdown gracefully
process.on('SIGTERM', () => {
    console.log('SIGTERM signal received. Closing server...');
    server.close(() => {
        console.log('Server closed');
        db.close((err) => {
            if (err) {
                console.error('Error closing database:', err);
            } else {
                console.log('Database connection closed');
            }
            process.exit(0);
        });
    });
}); 