
        const questions = [
            {
            question: "Question 1: Which driver sang smooth operator in Singapore GP 2023",
            options: ["A. Max Verstappen", "B. Lance Stroll", "C. Carlos Sainz", "D. Lewis Hamilton"],
            answer: 2
            },
            {
            question: "Question 2: For which F1 team Andrew Newey designed their livery for 2024?",
            options: ["A. Aston Martin", "B. Red Bull", "C. Scuderia Ferrari", "D. Haas F1 Team"],
            answer: 1
            },
            {
            question: "Question 3: Which driver won the 2023 F1 championship?",
            options: ["A. Lewis Hamilton", "B. Fernando Alonso", "C. Max Verstappen", "D. Kevin Magnussen"],
            answer: 2
            },
            {
            question: "Question 4: Which company has decided to take 100% ownership of the Stake F1 team?",
            options: ["A. Lamborghini", "B. Porsche", "C. Audi", "D. Volkswagen"],
            answer: 2
            },
            {
            question: "Question 5: Which team principle was removed from his position for 2024?",
            options: ["A. Gunther Steiner ", "B. Cyril Abiteboul", "C. Toto Wolfff", "D.Lewis Stroll"],
            answer: 0
            },
            {
            question: "Question 6: Which driver has HoneyBadger design on his helmet?",
            options: ["A. Michael Schumacher", "B. Niki Lauda", "C. Sebastian Vettel", "D. Daniel Ricciardo"],
            answer: 3
            },
        ];

        let currentQuestionIndex = 0;
        let score = 0;

        const startPage = document.getElementById("start-page");
        const quizPage = document.getElementById("quiz-page");
        const resultPage = document.getElementById("result-page");
        const startBtn = document.getElementById("start-btn");
        const submitBtn = document.getElementById("submit-btn");
        const restartBtn = document.getElementById("restart-btn");
        const quizContainer = document.getElementById("quiz-container");
        const scoreElement = document.getElementById("score");

        startBtn.addEventListener("click", startQuiz);
        submitBtn.addEventListener("click", submitQuiz);
        restartBtn.addEventListener("click", restartQuiz);

        function startQuiz() {
            startPage.classList.add("hidden");
            quizPage.classList.remove("hidden");
            loadQuestion();
        }

        function loadQuestion() {
            const currentQuestion = questions[currentQuestionIndex];
            quizContainer.innerHTML = `
                <div class="rounded-lg bg-gradient-to-r from-white to-gray-200 shadow-lg p-4">
                <h2 class="text-2xl font-bold mb-4">${currentQuestion.question}</h2>
                <div class="grid grid-cols-2 gap-4">
                    ${currentQuestion.options.map((option, index) => `
                        <label class="flex items-center">
                            <input type="radio" name="answer" value="${index}">
                            <span class="ml-2">${option}</span>
                        </label>
                    `).join("")}
                </div>
                <div>
            `;
        }

        function submitQuiz() {
            const selectedOption = document.querySelector('input[name="answer"]:checked');
            if (selectedOption) {
                const selectedAnswer = parseInt(selectedOption.value);
                if (selectedAnswer === questions[currentQuestionIndex].answer) {
                    score++;
                }
                currentQuestionIndex++;
                if (currentQuestionIndex < questions.length) {
                    loadQuestion();
                } else {
                    showResult();
                }
            }
        }

        function showResult() {
            quizPage.classList.add("hidden");
            resultPage.classList.remove("hidden");
            scoreElement.textContent = `Score: ${score}/${questions.length}`;
        }

        function restartQuiz() {
            currentQuestionIndex = 0;
            score = 0;
            resultPage.classList.add("hidden");
            startPage.classList.remove("hidden");
        }
 