const BASE_URL = "https://quizapi.io/api/v1/questions?";
const APIKEY = "b0Utci4vbrVAhTKFFsrCYneNi4x2RG5TWsiYSdTF";

class Quiz {
  constructor(quizData) {
    this.question = quizData.question;
    this.answer_a = this.formatAnswer(quizData.answers.answer_a);
    this.answer_b = this.formatAnswer(quizData.answers.answer_b);
    this.answer_c = this.formatAnswer(quizData.answers.answer_c);
    this.answer_d = this.formatAnswer(quizData.answers.answer_d);
    this.answer_e = this.formatAnswer(quizData.answers.answer_e);
    this.answer_f = this.formatAnswer(quizData.answers.answer_f);
    this.answer_g = this.formatAnswer(quizData.answers.answer_g);
  }
  // Regex generated with ChatGPT
  formatAnswer(answer) {
    if (answer) {
      // Use regex to replace < and > with HTML entities
      return answer.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    } else {
      return "";
    }
  }
  // Method to display quiz
  displayQuestions() {
    const questionContainer = document.getElementById("quiz-form");
    questionContainer.innerHTML += `
    <div class="question-container">
      <p>${this.question}</p>
      ${
        this.answer_a
          ? `<label><input type="radio" name="answer" value="answer_a">${this.answer_a}</label><br>`
          : ""
      }
      ${
        this.answer_b
          ? `<label><input type="radio" name="answer" value="answer_b">${this.answer_b}</label><br>`
          : ""
      }
      ${
        this.answer_c
          ? `<label><input type="radio" name="answer" value="answer_c">${this.answer_c}</label><br>`
          : ""
      }
      ${
        this.answer_d
          ? `<label><input type="radio" name="answer" value="answer_d">${this.answer_d}</label><br>`
          : ""
      }
      ${
        this.answer_e
          ? `<label><input type="radio" name="answer" value="answer_e">${this.answer_e}</label><br>`
          : ""
      }
      ${
        this.answer_f
          ? `<label><input type="radio" name="answer" value="answer_f">${this.answer_f}</label><br>`
          : ""
      }
      ${
        this.answer_g
          ? `<label><input type="radio" name="answer" value="answer_g">${this.answer_g}</label><br>`
          : ""
      }
      
    </div>
  `;
  }
}

// Fetches API data
async function fetchQuiz(category, number, difficulty) {
  try {
    const response = await fetch(
      `${BASE_URL}apiKey=${APIKEY}&difficulty=${difficulty}&limit=${number}&tags=${category}`
    );
    const quizData = await response.json();
    const questions = quizData.map((question) => new Quiz(question));
    questions.forEach((question) => question.displayQuestions());
  } catch (error) {
    console.error("Error fetching quiz data:", error);
    alert("Quiz not found, Try other options");
  }
}

// Event listener for generating quiz on page
const form = document.getElementById("quiz-options-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  document.getElementById("quiz-form").innerHTML = ``;
  fetchQuiz(form.category.value, form.number.value, form.difficulty.value);
});
