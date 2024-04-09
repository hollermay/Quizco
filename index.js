
        const questions = [
            {
                question: "Question 1",
                options: ["Option 1", "Option 2", "Option 3", "Option 4"],
                answer: 0
            },
            {
                question: "Question 2",
                options: ["Option 1", "Option 2", "Option 3", "Option 4"],
                answer: 1
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
                <h2 class="text-2xl font-bold mb-4">${currentQuestion.question}</h2>
                <div class="grid grid-cols-2 gap-4">
                    ${currentQuestion.options.map((option, index) => `
                        <label class="flex items-center">
                            <input type="radio" name="answer" value="${index}">
                            <span class="ml-2">${option}</span>
                        </label>
                    `).join("")}
                </div>
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
 