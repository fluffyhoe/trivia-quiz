import requests
import html
from flask import Flask, render_template, request

app = Flask(__name__)

API_URL = "https://opentdb.com/api.php?amount=5&type=multiple"

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/quiz', methods=['GET', 'POST'])
def quiz():
    global QUESTIONS
    
    if request.method == 'POST':
        user_answers = request.form
        score = sum(1 for q_id, answer in user_answers.items() if answer == QUESTIONS[q_id]['answer'])
        return render_template('result.html', score=score, total=len(QUESTIONS))
    
    # Fetch trivia questions from the API
    response = requests.get(API_URL)
    if response.status_code != 200:
        return "Error fetching questions. Please try again later.", 500
    
    api_questions = response.json()['results']
    QUESTIONS = {
        str(i + 1): {
            "question": html.unescape(q["question"]),  # Decode question
            "options": [html.unescape(opt) for opt in q["incorrect_answers"] + [q["correct_answer"]]],  # Decode options
            "answer": html.unescape(q["correct_answer"]),  # Decode correct answer
        }
        for i, q in enumerate(api_questions)
    }

    # Shuffle options
    for q_id, q_data in QUESTIONS.items():
        import random
        random.shuffle(q_data["options"])
    
    return render_template('quiz.html', questions=QUESTIONS)

if __name__ == '__main__':
    print("Starting Flask app...")  
    app.run(debug=True)  
