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
        const endQuizBtn = document.getElementById("end-quiz-btn");

        endQuizBtn.addEventListener("click", endQuiz);
        startBtn.addEventListener("click", startQuiz);
        submitBtn.addEventListener("click", submitQuiz);
        restartBtn.addEventListener("click", restartQuiz);

        function startQuiz() {
            startPage.classList.add("hidden");
            quizPage.classList.remove("hidden");
            loadQuestion();
        }

        function loadQuestion() {

            shuffleArray(questions);

            const currentQuestion = questions[currentQuestionIndex];
            quizContainer.innerHTML = `
                <div class=" block shadow-lg p-4 w-full border border-white bg-opacity-20 bg-gray-600">
                    <h2 class="text-3xl text-white font-bold mb-4">${currentQuestion.question}</h2>
                    <div class="grid grid-cols-2 gap-10 ">
                        ${currentQuestion.options.map((option, index) => `
                            <label class="flex items-center border dark:border-white ">
                                <input type="radio" name="answer" value="${index}" class="appearance-none">
                                <span class=" cursor-pointer text-center w-full justify-center text-white truncate uppercase select-none">${option}</span>
                            </label>
                        `).join("")}
                    </div>
                </div>
            `;

            const answerInputs = document.querySelectorAll('input[name="answer"]');
            answerInputs.forEach(input => {
                input.addEventListener("change", () => {
                    answerInputs.forEach(input => {
                        input.nextElementSibling.style.backgroundColor = "transparent";
                        input.nextElementSibling.style.color = "white";
                    });
                    input.nextElementSibling.style.backgroundColor = "white";
                    input.nextElementSibling.style.color = "black";
                });
            });
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
            } else {
            alert("Please select an option to move to the next question.");
            }
        }

        function endQuiz() {
            if(currentQuestionIndex === 0){
                alert("Please attempt the quiz first.");
            }
            else{
            showResult();
            }
        }

        function showResult() {
            quizPage.classList.add("hidden");
            resultPage.classList.remove("hidden");
            if(score<3){
                scoreElement.textContent = `You Scored: ${score}/${questions.length} Watch Drive to Survive to get better`;
            }
            if(score>=3){
                scoreElement.textContent = `You Scored: ${score}/${questions.length} You are a true F1 fan`;
            }
        }

        function restartQuiz() {
            currentQuestionIndex = 0;
            score = 0;
            resultPage.classList.add("hidden");
            startPage.classList.remove("hidden");
        }

        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }

        const questions = [
            {
            question: "Which driver sang smooth operator in Singapore GP 2023",
            options: ["A. Max Verstappen", "B. Lance Stroll", "C. Carlos Sainz", "D. Lewis Hamilton"],
            answer: 2
            },
            {
            question: "For which F1 team Andrew Newey designed their livery for 2024?",
            options: ["A. Aston Martin", "B. Red Bull", "C. Scuderia Ferrari", "D. Haas F1 Team"],
            answer: 1
            },
            {
            question: "Which driver won the 2023 F1 championship?",
            options: ["A. Lewis Hamilton", "B. Fernando Alonso", "C. Max Verstappen", "D. Kevin Magnussen"],
            answer: 2
            },
            {
            question: "Which company has decided to take 100% ownership of the Stake F1 team?",
            options: ["A. Lamborghini", "B. Porsche", "C. Audi", "D. Volkswagen"],
            answer: 2
            },
            {
            question: "Which team principle was removed from his position for 2024?",
            options: ["A. Gunther Steiner ", "B. Cyril Abiteboul", "C. Toto Wolfff", "D.Lewis Stroll"],
            answer: 0
            },
            {
            question: "Which driver has HoneyBadger design on his helmet?",
            options: ["A. Michael Schumacher", "B. Niki Lauda", "C. Sebastian Vettel", "D. Daniel Ricciardo"],
            answer: 3
            },
        ];
