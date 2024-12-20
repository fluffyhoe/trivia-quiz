Trivia Quiz Web Application
Team Member: Min Woo Song

1. Project Overview
The Trivia Quiz Web Application is a dynamic and interactive platform where users can test their knowledge on various topics. The app features a timer for each question, dynamic feedback on answers, and a final score display at the end. It integrates the Open Trivia API to fetch questions and answers in real time, ensuring a diverse range of topics and challenges.

2. Usage Guidelines
Start the Quiz:
Navigate to the homepage and click the "Start Quiz" button to begin.
Answer Questions:
Each question is displayed with a timer. Select your answer and click "Submit."
Feedback is provided immediately after submission, showing whether your answer was correct or incorrect.
View Final Score:
After answering all questions, your total score is displayed on the results page.
Restart:
You can restart the quiz by clicking the "Play Again" button on the results page.
Requirements:

A modern web browser to access the application.
Internet connectivity (required to fetch questions from the trivia API).

3. Dependencies
The following libraries, APIs, and tools are used in this project:

Flask: Backend framework for routing and serving web pages.
Requests: To fetch trivia questions from the Open Trivia API.
HTML/CSS/JavaScript: For creating the frontend UI and interactive quiz functionality.
Open Trivia Database API: To retrieve dynamic trivia questions.
Python: Core programming language for backend logic.

4. Project Structure
graphql
Copy code
trivia-quiz/
├── app.py                   # Main application file (Flask server)
├── templates/               # HTML templates for the frontend
│   ├── index.html           # Homepage
│   ├── quiz.html            # Quiz page
│   ├── result.html          # Result page
├── static/                  # Static assets
│   ├── styles.css           # Custom CSS styles
│   ├── scripts.js           # JavaScript for quiz logic
├── requirements.txt         # Python dependencies
├── .gitignore               # Excluded files for Git
└── README.md                # Project documentation

5. Collaboration Information
This project was completed individually. All aspects of the project—backend development, API integration, frontend design, and testing—were handled by Min.

6. Acknowledgments
Open Trivia Database: Provided the trivia questions for the application.
Flask Documentation: Used as a guide for setting up the backend.
HTML, CSS, and JavaScript Tutorials: For frontend design and interactive features.
ChatGPT by OpenAI: Assisted with debugging, API integration, and overall project guidance.

7. Reflection
Working on this project was a rewarding experience, allowing me to combine concepts from Python programming, web development, and API integration into a functional and engaging application. Key takeaways include:

What Went Well:

Successfully integrated the Open Trivia API, ensuring dynamic content.
Developed a responsive and interactive user interface.
Implemented JavaScript for real-time feedback and a question timer.

Challenges:

Handling form validation for hidden elements (e.g., required fields for quiz questions).
Ensuring seamless transitions between questions without overwhelming users.
Debugging errors in real-time API data rendering.

Learning Outcomes:

Improved understanding of Flask routing and API integration.
Gained confidence in writing JavaScript for client-side interactions.
Enhanced problem-solving skills through project planning and execution.

This project has strengthened my skills and demonstrated the importance of user-centric design, effective debugging, and continuous learning. In future projects, I aim to focus more on scalability and user data persistence, such as saving scores to a database.

