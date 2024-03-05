const BASE_URL = "https://quizapi.io/api/v1/questions?";
const APIKEY = "b0Utci4vbrVAhTKFFsrCYneNi4x2RG5TWsiYSdTF";

class Quiz {
  constructor(quizData) {
    this.question = quizData.question;
    this.answer_a = quizData.answers.answer_a
      ? `<p>${quizData.answers.answer_a}</p>`
      : "";
    this.answer_b = quizData.answers.answer_b
      ? `<p>${quizData.answers.answer_b}</p>`
      : "";
    this.answer_c = quizData.answers.answer_c
      ? `<p>${quizData.answers.answer_c}</p>`
      : "";
    this.answer_d = quizData.answers.answer_d
      ? `<p>${quizData.answers.answer_d}</p>`
      : "";
    this.answer_e = quizData.answers.answer_e
      ? `<p>${quizData.answers.answer_e}</p>`
      : "";
    this.answer_f = quizData.answers.answer_f
      ? `<p>${quizData.answers.answer_f}</p>`
      : "";
    this.answer_g = quizData.answers.answer_g
      ? `<p>${quizData.answers.answer_g}</p>`
      : "";
  }

  displayQuestions() {
    const questionContainer = document.getElementById("questions-display");
    questionContainer.innerHTML += `
      <div>
        <p>${this.question}</p>
        ${this.answer_a}
        ${this.answer_b}
        ${this.answer_c}
        ${this.answer_d}
        ${this.answer_e}
        ${this.answer_f}
        ${this.answer_g}
      </div>
    `;
  }
}

async function fetchQuiz(difficulty, number, category) {
  try {
    const response = await fetch(
      `${BASE_URL}apiKey=${APIKEY}&difficulty=${difficulty}&limit=${number}&tags=${category}`
    );
    const quizData = await response.json();
    const questions = quizData.map((question) => new Quiz(question));
    questions.forEach((question) => question.displayQuestions());
  } catch (error) {
    console.error("Error fetching quiz data:", error);
  }
}

fetchQuiz("Medium", 5, "HTML");
