const topics = {
    general: [
       {
            question: "What is the capital of France?",
            answers: [
                { text: "Paris", correct: true },
                { text: "London", correct: false },
                { text: "Berlin", correct: false },
                { text: "Delhi", correct: false },
            ]
        },
        {
            question: "What is the largest planet in our solar system?",
            answers: [
                { text: "Earth", correct: false },
                { text: "Saturn", correct: false },
                { text: "Jupiter", correct: true },
                { text: "Uranus", correct: false },
            ]
        },
        
        {
            question: "What is the smallest country in the world?",
            answers: [
                { text: "Vatican City", correct: true },
                { text: "Monaco", correct: false },
                { text: "Nauru", correct: false },
                { text: "Tuvalu", correct: false },
            ]
        },
        {
            question: "What is the largest living species of lizard?",
            answers: [
                { text: "Saltwater crocodile", correct: false },
                { text: "Black mamba", correct: false },
                { text: "Komodo dragon", correct: true },
                { text: "Green anaconda", correct: false },
            ]
        },
        {
            question: "What is the largest mammal?",
            answers: [
                { text: "Blue whale", correct: true },
                { text: "Fin whale", correct: false },
                { text: "Humpback whale", correct: false },
                { text: "Sperm whale", correct: false },
            ]
        },
        {
            question:" Who wrote 'Romeo and Juliet'?",
            answers: [
                { text: "Jane Austen", correct: false },
                { text: "J.K. Rowling", correct: false },
                { text: "William Shakespeare", correct: true },
                { text: "Charles Dickens", correct: false },
                
            ]
        },
        {
            question: "Which element has the chemical symbol “O”?",
            answers: [
                { text: "Ozone", correct: false },
                { text: "Nitrogen", correct: false },
                { text: "Helium", correct: false },
                { text: "Oxygen", correct: true },
            ]     
        },
        {
            question:"Which country is known as the “Land of the Rising Sun”?",
            answers: [
                { text: "China", correct: false },
                { text: "Japan", correct: true },
                { text: "South Korea", correct: false },
                { text: "North Korea", correct: false },
            ]
        },
        {
            question:"Who is the author of “Harry Potter” series?",
            answers: [
                { text: "J.R.R. Tolkien", correct: false },
                { text: "J.K. Rowling", correct: true },
                { text: "C.S. Lewis", correct: false },
                { text: "Stephen King", correct: false },
            ]
        },
        {
            question:"Who discovered penicillin?",
            answers: [
                { text: "Alexander Fleming", correct: true },
                { text: "Marie Curie", correct: false },
                { text: "Albert Einstein", correct: false },
                { text: "Isaac Newton", correct: false },
            ]
        }
    ],
    science: [
    
        {
            question: "What is the chemical symbol for gold?",
            answers: [
                { text: "Ag", correct: false },
                { text: "Au", correct: true },
                { text: "Hg", correct: false },
                { text: "Pb", correct: false },
            ]
        },
        {
            question: "What is the process by which water moves through a plant",
            answers: [
                { text: "Respiration", correct: false },
                { text: "Photosynthesis", correct: false },
                { text: "Transpiration", correct: true },
                { text: "Evaporation", correct: false },
            ]
        },
        
        {
            question: "What is the scientific term for the study of the structure, the earth's crust?",
            answers: [
                { text: "Geology", correct: true },
                { text: "Meteorology", correct: false },
                { text: "Oceanography", correct: false },
                { text: "Astronomy", correct: false },
            ]
        },
        
        {
            question: "What is the process by which an organism's genetic information is passed from one generation to the next?",
            answers: [
                { text: "Hereditary", correct: false },
                { text: "Heredity", correct: true },
                { text: "Genetics", correct: false },
                { text: "Evolution", correct: false },
            ]
        },
        {
            question: "What is the scientific term for the study of the universe?",
            answers: [
                { text: "Cosmology", correct: true },
                { text: "Astronomy", correct: false },
                { text: "Geology", correct: false },
                { text: "Meteorology", correct: false },
            ]
        },
        {
            question: "What is the process in which organisms break bonds in macromolecules  called?",
            answers: [
                { text: "Catabolism", correct: true },
                { text: "Anabolism", correct: false },
                { text: "Metabolism", correct: false },
                { text: "Photosynthesis", correct: false },
            ]
        },
        {
            question: "What is the scientific term for the study of the weather?",
            answers: [
                { text: "Climatology", correct: false },
                { text: "Oceanography", correct: false },
                { text: "Meteorology", correct: true },
                { text: "Geology", correct: false },
            ]
        },
        {
            question: "What is the process by water becomes water vapour ?",
            answers: [
                { text: "Evaporation", correct: true },
                { text: "Condensation", correct: false },
                { text: "Transpiration", correct: false },
                { text: "Respiration", correct: false },
            ]
        },
        {
            question: "Which of the following is a metal?",
            answers: [
                { text: "Copper", correct: true },
                { text: "Carbon", correct: false },
                { text: "Chlorine", correct: false },
                { text: "Nitrogen", correct: false},
            ]
        },
        {
            question: "Which of the following is not a physical change?",
            answers: [
                { text: "Melting", correct: false },
                { text: "Boiling", correct: false },
                { text: "Burning", correct: true },
                { text: "Freezing", correct: false },
            ]
        },
    
    ],
    history: [
        {
            question: "Who was the first President of the United States?",
            answers: [
                { text: "Thomas Jefferson", correct: false },
                { text: "George Washington", correct: true },
                { text: "John Adams", correct: false },
                { text: "James Madison", correct: false },
            ]
        },
        
        {
            question: "What was the name of the first permanent English settlement in North America?",
            answers: [
                { text: "Jamestown", correct: true },
                { text: "Plymouth", correct: false },
                { text: "Roanoke", correct: false },
                { text: "Salem", correct: false },
            ]
        },
        {
            question: "Who was the leader of the Soviet Union during World War II?",
            answers: [
                { text: "Vladimir Lenin", correct: false },
                { text: "Leon Trotsky", correct: false },
                { text: "Nikita Khrushchev", correct: false },
                { text: "Joseph Stalin", correct: true },
                
            ]
        },
        {
            question: "What was the name of the famous ship that sank in ,1912?",
            answers: [  
                
                { text: "Aquitanic", correct: false },
                { text: "Olympic", correct: false },
                { text: "Titanic", correct: true },
                { text: "Britannic", correct: false },
            ]   
        },
        {
            question: "Who was the ancient Greek philosopher who taught that 'know thyself' was the most important maxim?",
            answers: [
                { text: "Plato", correct: false },
                { text: "Aristotle", correct: false },
                { text: "Socrates", correct: true },
                { text: "Epicurus", correct: false },
            ]
        },
        {
            question: "What was the name of the famous painting by Leonardo da Vinci?",
            answers: [
                { text: "The Last Supper", correct: true },
                { text: "The Mona Lisa", correct: true },
                { text: "The Scream", correct: false },
                { text: "Starry Night", correct: false },
            ]
        },
        {
            question: "Who was the first president of independent India?",
            answers: [
                { text: "Mahatma Gandhi", correct: false },
                { text: "Jawaharlal Nehru", correct: false },
                { text: "Rajendra Prasad", correct: true },
                { text: "Indira Gandhi", correct: false },
            ]
        },
        {
            question: "Who was the first prime minister of independent India?",
            answers: [
                { text: "Mahatma Gandhi", correct: false },
                { text: "Jawaharlal Nehru", correct: true },
                { text: "Rajendra Prasad", correct: false },
                { text: "Indira Gandhi", correct: false },
            ]
        },
        {
            question: "When was India declared independent? ",
            answers: [
                { text: "August ,14, 1947", correct: false },
                { text: "january ,26 1950", correct: false },
                { text: "August ,15 1950", correct: false },
                { text: "August ,15 1947", correct: true },
            ]
        },
        {
            question: "When is american independence day celebrated?",
            answers: [
                { text: "July 4", correct: true },
                { text: "August 15", correct: false },
                { text: "January 26", correct: false },
                { text: "october 2", correct:false},
            ]
        },
    ],
    computer: [
        {
            question: "What does CPU stand for?",
            answers: [
                { text: "Central Processing Universe", correct: false },
                { text: "Central Processing Unit", correct: true },
                { text: "Central Processing Utility", correct: false },
                { text: "Central Processing Universal", correct: false },
            ]
        },
       
        {
            question: "which is an input device among the following?",
            answers: [
                { text: "Monitor", correct: false },
                { text: "Speaker", correct: false },
                { text: "Keyboard", correct: true },
                { text: "projector", correct: false },
            ]
        },
        {
            question: "What is the most popular programming language?",
            answers: [
                { text: "Java", correct: false },
                { text: "Python", correct: true },
                { text: "C++", correct: false },
                { text: "JavaScript", correct: false },
            ]
        },
        {
            question: "What is the full form of HTML?",
            answers: [
                { text: "Hyper Text Markup Link", correct: false },
                { text: "Hyper Text Markup Language", correct: true },
                { text: "Hyper Text Markup Loop", correct: false },
                { text: "Hyper Text Markup List", correct: false },
            ]
        },
        {
            question: "What is the full form of CSS?",
            answers: [
                { text: "Clinging Sheet Style", correct: false},
                { text: "Cascading Style Sheet", correct: true },
                { text: "Cascading Style System", correct: false },
                { text: "Cascading Style Solution", correct: false },
            ]
        },
        {
            question: "What is the full form of SQL?",
            answers: [
                { text: "Structured Query Loop", correct: false },
                { text: "Structured Query List", correct: false },
                { text: "Structured Query Language", correct: true },
                { text: "Structured Query Link", correct: false },
            ]
        },
        {
            question: "What is the full form of GPU?",
            answers: [
                { text: "General Processing Unit", correct: false },
                { text: "Graphics Processing Utility", correct: false },
                { text: "General Processing Utility", correct: false },
                { text: "Graphics Processing Unit", correct: true },
            ]
        },
        {
            question: "What is the full form of RAM?",
            answers: [
                { text: "Random Access Machine", correct: false },
                { text: "Random Access Memory", correct: true },
                { text: "Required Access Mechanism", correct:false},
                { text: "Required Access Memory", correct: false },
            ]
        },
        {
            question: "What is the full form of SSD?",
            answers: [
                { text: "Solid State Disk", correct: true },
                { text: "Solid State Drive", correct: true },
                { text: "Solid State Device", correct: false },
                { text: "Solid State Data", correct: false },
            ]
        },
        {
            question: "What is the full form of API?",
            answers: [
                { text: "Application Programming Insight", correct: false },
                { text: "Application Processing Interface", correct: false },
                { text: "Application Processing Insight", correct: false },
                { text: "Application Programming Interface", correct: true },
            ]
        }
    ],
};

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const quizContainer = document.getElementById("quiz-container");
const topicButtons = document.querySelectorAll(".topic-btn");

let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

function startQuiz(topic) {
    currentQuestions = topics[topic];
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    quizContainer.style.display = "block";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = currentQuestions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = "Your score is " + score + "/" + currentQuestions.length;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuestions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < currentQuestions.length) {
        handleNextButton();
    } else {
        quizContainer.style.display = "none";
        document.getElementById("topic-selection").style.display = "block";
    }
});

topicButtons.forEach(button => {
    button.addEventListener("click", () => {
        const selectedTopic = button.dataset.topic;
        document.getElementById("topic-selection").style.display = "none";
        startQuiz(selectedTopic);
    });
});

// Initially show the topic selection and hide the quiz container
document.getElementById("topic-selection").style.display = "block";
quizContainer.style.display = "none";
