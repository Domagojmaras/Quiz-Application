const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}));
app.use(express.json());
app.use(express.static(path.join(__dirname))); // Serve static files from current directory

// Database setup
const db = new sqlite3.Database('quiz.db', (err) => {
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
        )`);
    }
});

// API Routes
app.post('/api/scores', (req, res) => {
    const { username, score } = req.body;
    
    if (!username || typeof score !== 'number') {
        return res.status(400).json({ error: 'Invalid input' });
    }

    db.run('INSERT INTO scores (username, score) VALUES (?, ?)', [username, score], function(err) {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Failed to save score' });
        }
        res.json({ id: this.lastID, username, score });
    });
});

app.get('/api/scores', (req, res) => {
    db.all('SELECT * FROM scores ORDER BY score DESC, date DESC LIMIT 10', [], (err, rows) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Failed to fetch scores' });
        }
        res.json(rows);
    });
});

// Serve the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
}); 