let currentQuestion = 0;
let score = 0;
let selectedQuestions = [];
let username = '';

// Get DOM elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const questionElement = document.getElementById('question');
const answerButtons = document.querySelectorAll('.answer-btn');
const scoreElement = document.getElementById('score');
const resultMessage = document.getElementById('result-message');
const restartBtn = document.getElementById('restart-btn');
const progressDots = document.querySelectorAll('.dot');
const usernameInput = document.getElementById('username-input');
const usernameError = document.getElementById('username-error');
const resultUsername = document.getElementById('result-username');
const leaderboardList = document.getElementById('leaderboard-list');

// Function to validate username
function validateUsername() {
    const name = usernameInput.value.trim();
    const container = document.querySelector('.username-container');
    
    if (name.length < 2) {
        usernameError.textContent = 'Please enter at least 2 characters';
        container.classList.add('error');
        setTimeout(() => container.classList.remove('error'), 500);
        return false;
    }
    
    usernameError.textContent = '';
    container.classList.remove('error');
    return true;
}

// Function to update leaderboard
async function updateLeaderboard() {
    try {
        console.log('Fetching leaderboard...');
        const response = await fetch('/api/scores', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        
        console.log('Response status:', response.status);
        console.log('Response headers:', Object.fromEntries(response.headers.entries()));
        
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({ error: 'Unknown error' }));
            console.error('Server error:', errorData);
            throw new Error(`Failed to fetch leaderboard: ${errorData.error || response.statusText}${errorData.details ? ` - ${errorData.details}` : ''}`);
        }
        
        const scores = await response.json();
        console.log('Received scores:', scores);
        
        const leaderboardList = document.getElementById('leaderboard-list');
        if (!leaderboardList) {
            console.error('Leaderboard list element not found');
            return;
        }
        
        leaderboardList.innerHTML = '';
        
        if (scores.length === 0) {
            const li = document.createElement('li');
            li.textContent = 'No scores yet. Be the first to play!';
            leaderboardList.appendChild(li);
            return;
        }
        
        scores.forEach((entry, index) => {
            const li = document.createElement('li');
            li.className = 'leaderboard-entry';
            
            // Add medal emojis for top 3
            let medal = '';
            if (index === 0) medal = '🥇';
            else if (index === 1) medal = '🥈';
            else if (index === 2) medal = '🥉';
            
            li.innerHTML = `
                <span class="position">${index + 1}.</span>
                <span class="username">${medal} ${entry.username}</span>
                <span class="score">${entry.score}/5</span>
                <span class="date">${new Date(entry.date).toLocaleDateString()}</span>
            `;
            leaderboardList.appendChild(li);
        });
    } catch (error) {
        console.error('Error updating leaderboard:', error);
        const leaderboardList = document.getElementById('leaderboard-list');
        if (leaderboardList) {
            leaderboardList.innerHTML = `<li class="error-message">Error loading leaderboard: ${error.message}</li>`;
        }
    }
}

// Function to show leaderboard
function showLeaderboard() {
    const leaderboardSection = document.getElementById('leaderboard');
    if (leaderboardSection) {
        leaderboardSection.style.display = 'block';
        updateLeaderboard();
    }
}

// Function to hide leaderboard
function hideLeaderboard() {
    const leaderboardSection = document.getElementById('leaderboard');
    if (leaderboardSection) {
        leaderboardSection.style.display = 'none';
    }
}

// Function to save score
async function saveScore() {
    try {
        const response = await fetch('/api/scores', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, score })
        });
        
        if (!response.ok) {
            throw new Error('Failed to save score');
        }
        
        await updateLeaderboard();
    } catch (error) {
        console.error('Error saving score:', error);
    }
}

// Function to shuffle array using Fisher-Yates algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to select random questions
function selectRandomQuestions() {
    const shuffledQuestions = shuffleArray([...allQuestions]);
    return shuffledQuestions.slice(0, 5);
}

// Function to update progress dots
function updateProgressDots() {
    progressDots.forEach((dot, index) => {
        if (index <= currentQuestion) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Initialize event listeners
function initializeQuiz() {
    startBtn.addEventListener('click', () => {
        if (validateUsername()) {
            username = usernameInput.value.trim();
            startQuiz();
        }
    });
    
    restartBtn.addEventListener('click', restartQuiz);
    
    // Add event listeners to answer buttons
    answerButtons.forEach(button => {
        button.addEventListener('click', () => selectAnswer(parseInt(button.dataset.index)));
    });

    // Add input validation
    usernameInput.addEventListener('input', () => {
        if (usernameInput.value.trim().length > 0) {
            validateUsername();
        } else {
            usernameError.textContent = '';
        }
    });
}

function startQuiz() {
    // Select random questions for this round
    selectedQuestions = selectRandomQuestions();
    
    // Initialize quiz state
    currentQuestion = 0;
    score = 0;
    
    // Reset progress dots
    progressDots.forEach((dot, index) => {
        if (index === 0) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
    
    // Switch screens with smooth transition
    startScreen.classList.remove('active');
    quizScreen.classList.add('active');
    showQuestion();
}

function showQuestion() {
    resetState();
    let question = selectedQuestions[currentQuestion];
    questionElement.textContent = question.question;

    question.answers.forEach((answer, index) => {
        answerButtons[index].textContent = `${String.fromCharCode(65 + index)}. ${answer}`;
    });

    // Update progress dots
    updateProgressDots();
}

function resetState() {
    answerButtons.forEach(button => {
        button.classList.remove('correct', 'wrong');
        button.disabled = false;
    });
}

function selectAnswer(index) {
    const correct = selectedQuestions[currentQuestion].correct;
    const selectedButton = answerButtons[index];
    const isCorrect = index === correct;

    if (isCorrect) {
        selectedButton.classList.add('correct');
        score++;
    } else {
        selectedButton.classList.add('wrong');
        answerButtons[correct].classList.add('correct');
    }

    // Disable all buttons after selection
    answerButtons.forEach(button => {
        button.disabled = true;
    });

    // Wait before moving to next question
    setTimeout(() => {
        if (currentQuestion < selectedQuestions.length - 1) {
            currentQuestion++;
            showQuestion();
        } else {
            setTimeout(() => {
                showResult();
            }, 300);
        }
    }, 1500);
}

function showResult() {
    quizScreen.classList.remove('active');
    resultScreen.classList.add('active');
    scoreElement.textContent = score;
    resultUsername.textContent = username;

    // Set result message based on score
    if (score === 5) {
        resultMessage.textContent = "Perfect! You're a genius! 🎉";
    } else if (score >= 3) {
        resultMessage.textContent = "Well done! You did great! 👏";
    } else if (score >= 2) {
        resultMessage.textContent = "Good job! Keep learning! 📚";
    } else {
        resultMessage.textContent = "Keep practicing! You can do better! 💪";
    }

    // Save score and update leaderboard
    saveScore();
}

function restartQuiz() {
    resultScreen.classList.remove('active');
    startScreen.classList.add('active');
    hideLeaderboard();
    // Reset progress dots
    progressDots.forEach(dot => dot.classList.remove('active'));
    // Clear username input
    usernameInput.value = '';
    username = '';
}

// Initialize the quiz when the page loads
initializeQuiz();

// Add event listener for leaderboard link
document.getElementById('leaderboard-link').addEventListener('click', (e) => {
    e.preventDefault();
    showLeaderboard();
}); 