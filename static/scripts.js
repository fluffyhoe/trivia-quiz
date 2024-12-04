document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const questions = document.querySelectorAll(".question");
    let currentQuestionIndex = 0;
    let score = 0;

    // Hide all questions initially except the first
    questions.forEach((question, index) => {
        question.style.display = index === 0 ? "block" : "none";
        // Disable required for hidden questions
        const inputs = question.querySelectorAll("input");
        inputs.forEach((input) => input.required = index === 0);
    });

    // Show the next question
    const showNextQuestion = () => {
        // Hide current question
        const currentQuestion = questions[currentQuestionIndex];
        const currentInputs = currentQuestion.querySelectorAll("input");
        currentInputs.forEach((input) => input.required = false); // Disable required

        currentQuestion.style.display = "none"; // Hide it
        currentQuestionIndex++; // Move to the next question

        if (currentQuestionIndex < questions.length) {
            const nextQuestion = questions[currentQuestionIndex];
            const nextInputs = nextQuestion.querySelectorAll("input");

            nextQuestion.style.display = "block"; // Show next question
            nextInputs.forEach((input) => input.required = true); // Enable required
        } else {
            alert(`Quiz complete! Your score is ${score} out of ${questions.length}.`);
            form.submit(); // Submit the form after the last question
        }
    };

    // Handle form submission
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const currentQuestion = questions[currentQuestionIndex];
        const selectedOption = currentQuestion.querySelector("input[type='radio']:checked");

        if (!selectedOption) {
            alert("Please select an answer before submitting.");
            return;
        }

        const correctAnswer = selectedOption.dataset.correct;

        if (selectedOption.value === correctAnswer) {
            alert("Correct!");
            score++;
        } else {
            alert(`Wrong! The correct answer was: ${correctAnswer}`);
        }

        // Move to the next question
        setTimeout(showNextQuestion, 1000);
    });
});
