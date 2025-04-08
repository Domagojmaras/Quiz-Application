const allQuestions = [
    // Sports Questions
    {
        question: "Which country won the 2022 FIFA World Cup?",
        answers: [
            "Brazil",
            "Argentina",
            "France",
            "Germany"
        ],
        correct: 1
    },
    {
        question: "Who holds the record for most Olympic gold medals?",
        answers: [
            "Usain Bolt",
            "Michael Phelps",
            "Carl Lewis",
            "Mark Spitz"
        ],
        correct: 1
    },
    {
        question: "In which sport would you perform a slam dunk?",
        answers: [
            "Tennis",
            "Handball",
            "Volleyball",
            "Basketball"
        ],
        correct: 3
    },
    {
        question: "Which tennis player has won the most Grand Slam titles?",
        answers: [
            "Roger Federer",
            "Rafael Nadal",
            "Novak Djokovic",
            "Pete Sampras"
        ],
        correct: 2
    },
    {
        question: "What is the maximum score in a game of bowling?",
        answers: [
            "200",
            "250",
            "300",
            "350"
        ],
        correct: 2
    },

    // Geography Questions
    {
        question: "Which is the largest country by area?",
        answers: [
            "China",
            "Canada",
            "Russia",
            "United States"
        ],
        correct: 2
    },
    {
        question: "What is the longest river in the world?",
        answers: [
            "Amazon",
            "Nile",
            "Yangtze",
            "Mississippi"
        ],
        correct: 1
    },
    {
        question: "Which continent has the most countries?",
        answers: [
            "Asia",
            "Africa",
            "Europe",
            "South America"
        ],
        correct: 1
    },
    {
        question: "What is the capital of New Zealand?",
        answers: [
            "Auckland",
            "Wellington",
            "Christchurch",
            "Dunedin"
        ],
        correct: 1
    },
    {
        question: "Which country has the most time zones?",
        answers: [
            "Russia",
            "United States",
            "France",
            "China"
        ],
        correct: 2
    },

    // History Questions
    {
        question: "Who was the first President of the United States?",
        answers: [
            "Thomas Jefferson",
            "George Washington",
            "John Adams",
            "Benjamin Franklin"
        ],
        correct: 1
    },
    {
        question: "In which year did World War I begin?",
        answers: [
            "1912",
            "1914",
            "1916",
            "1918"
        ],
        correct: 1
    },
    {
        question: "Who was the first woman to win a Nobel Prize?",
        answers: [
            "Marie Curie",
            "Mother Teresa",
            "Jane Addams",
            "Pearl S. Buck"
        ],
        correct: 0
    },
    {
        question: "Which ancient civilization built the pyramids?",
        answers: [
            "Greeks",
            "Romans",
            "Egyptians",
            "Mayans"
        ],
        correct: 2
    },
    {
        question: "When did the Berlin Wall fall?",
        answers: [
            "1987",
            "1989",
            "1991",
            "1993"
        ],
        correct: 1
    },

    // Science Questions
    {
        question: "What is the chemical symbol for gold?",
        answers: [
            "Ag",
            "Cu",
            "Fe",
            "Au"
        ],
        correct: 3
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            "Venus",
            "Mars",
            "Jupiter",
            "Saturn"
        ],
        correct: 1
    },
    {
        question: "What is the largest organ in the human body?",
        answers: [
            "Liver",
            "Heart",
            "Skin",
            "Brain"
        ],
        correct: 2
    },
    {
        question: "Which scientist developed the theory of relativity?",
        answers: [
            "Isaac Newton",
            "Albert Einstein",
            "Galileo Galilei",
            "Stephen Hawking"
        ],
        correct: 1
    },
    {
        question: "What is the boiling point of water in Celsius?",
        answers: [
            "90°C",
            "100°C",
            "110°C",
            "120°C"
        ],
        correct: 1
    },

    // Literature Questions
    {
        question: "Who wrote 'Pride and Prejudice'?",
        answers: [
            "Charlotte Brontë",
            "Jane Austen",
            "Emily Brontë",
            "Virginia Woolf"
        ],
        correct: 1
    },
    {
        question: "Which Shakespeare play features the character Hamlet?",
        answers: [
            "Macbeth",
            "Othello",
            "Hamlet",
            "King Lear"
        ],
        correct: 2
    },
    {
        question: "Who wrote '1984'?",
        answers: [
            "Aldous Huxley",
            "George Orwell",
            "Ray Bradbury",
            "H.G. Wells"
        ],
        correct: 1
    },
    {
        question: "Which book series features Harry Potter?",
        answers: [
            "J.R.R. Tolkien",
            "J.K. Rowling",
            "C.S. Lewis",
            "Philip Pullman"
        ],
        correct: 1
    },
    {
        question: "Who wrote 'The Great Gatsby'?",
        answers: [
            "Ernest Hemingway",
            "F. Scott Fitzgerald",
            "John Steinbeck",
            "William Faulkner"
        ],
        correct: 1
    },

    // Art Questions
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            "Vincent van Gogh",
            "Pablo Picasso",
            "Leonardo da Vinci",
            "Michelangelo"
        ],
        correct: 2
    },
    {
        question: "Which art movement is Salvador Dalí associated with?",
        answers: [
            "Impressionism",
            "Surrealism",
            "Cubism",
            "Expressionism"
        ],
        correct: 1
    },
    {
        question: "Who sculpted the statue of David?",
        answers: [
            "Donatello",
            "Michelangelo",
            "Leonardo da Vinci",
            "Raphael"
        ],
        correct: 1
    },
    {
        question: "Which artist is known for painting 'The Starry Night'?",
        answers: [
            "Claude Monet",
            "Vincent van Gogh",
            "Edvard Munch",
            "Paul Cézanne"
        ],
        correct: 1
    },
    {
        question: "What is the name of the famous painting by Edvard Munch that shows a figure screaming?",
        answers: [
            "The Scream",
            "The Cry",
            "The Shout",
            "The Yell"
        ],
        correct: 0
    },

    // Technology Questions
    {
        question: "Who is the founder of Microsoft?",
        answers: [
            "Steve Jobs",
            "Bill Gates",
            "Mark Zuckerberg",
            "Larry Page"
        ],
        correct: 1
    },
    {
        question: "What does 'AI' stand for?",
        answers: [
            "Artificial Intelligence",
            "Automated Interface",
            "Advanced Integration",
            "Automated Intelligence"
        ],
        correct: 0
    },
    {
        question: "Which company developed the iPhone?",
        answers: [
            "Samsung",
            "Apple",
            "Google",
            "Microsoft"
        ],
        correct: 1
    },
    {
        question: "What is the name of the first computer programmer?",
        answers: [
            "Alan Turing",
            "Ada Lovelace",
            "Charles Babbage",
            "Grace Hopper"
        ],
        correct: 1
    },
    {
        question: "Which social media platform was launched first?",
        answers: [
            "Facebook",
            "Twitter",
            "MySpace",
            "LinkedIn"
        ],
        correct: 2
    },

    // Nature Questions
    {
        question: "What is the largest mammal on Earth?",
        answers: [
            "African Elephant",
            "Blue Whale",
            "Giraffe",
            "Polar Bear"
        ],
        correct: 1
    },
    {
        question: "Which is the largest rainforest in the world?",
        answers: [
            "Congo Rainforest",
            "Amazon Rainforest",
            "Daintree Rainforest",
            "Borneo Rainforest"
        ],
        correct: 1
    },
    {
        question: "What is the tallest tree species?",
        answers: [
            "Giant Sequoia",
            "Coast Redwood",
            "Douglas Fir",
            "Sitka Spruce"
        ],
        correct: 1
    },
    {
        question: "Which animal is known as the 'King of the Jungle'?",
        answers: [
            "Tiger",
            "Lion",
            "Leopard",
            "Cheetah"
        ],
        correct: 1
    },
    {
        question: "What is the largest type of penguin?",
        answers: [
            "Emperor Penguin",
            "King Penguin",
            "Gentoo Penguin",
            "Adélie Penguin"
        ],
        correct: 0
    },

    // Daily News Questions
    {
        question: "Which country hosted the 2022 Winter Olympics?",
        answers: [
            "Japan",
            "South Korea",
            "China",
            "Russia"
        ],
        correct: 2
    },
    {
        question: "Who won the 2023 Nobel Peace Prize?",
        answers: [
            "Narges Mohammadi",
            "Maria Ressa",
            "Dmitry Muratov",
            "Malala Yousafzai"
        ],
        correct: 0
    },
    {
        question: "Which tech company launched ChatGPT?",
        answers: [
            "Google",
            "Microsoft",
            "OpenAI",
            "Meta"
        ],
        correct: 2
    },
    {
        question: "Which country became the first to land on the far side of the moon?",
        answers: [
            "United States",
            "Russia",
            "China",
            "India"
        ],
        correct: 2
    },
    {
        question: "Which country hosted the 2023 FIFA Women's World Cup?",
        answers: [
            "France",
            "Australia and New Zealand",
            "United States",
            "Canada"
        ],
        correct: 1
    }
]; 