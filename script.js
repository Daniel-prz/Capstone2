const BASE_URL = "https://quizapi.io/api/v1/questions?";
const APIKEY = "b0Utci4vbrVAhTKFFsrCYneNi4x2RG5TWsiYSdTF";

class Quiz {
  constructor(quizData) {
    this.question = this.formatQuestion(quizData.question);
    this.answer_a = this.formatQuestion(quizData.answers.answer_a);
    this.answer_b = this.formatQuestion(quizData.answers.answer_b);
    this.answer_c = this.formatQuestion(quizData.answers.answer_c);
    this.answer_d = this.formatQuestion(quizData.answers.answer_d);
    this.answer_e = this.formatQuestion(quizData.answers.answer_e);
    this.answer_f = this.formatQuestion(quizData.answers.answer_f);
    this.answer_g = this.formatQuestion(quizData.answers.answer_g);
    this.correct_answer = "";
    // this.q = this.question;
    // this.a_a = this.answer_a;
    // this.a_b = this.answer_b;
    // this.a_c = this.answer_c;
    // this.a_d = this.answer_d;
    // this.a_e = this.answer_e;
    // this.a_f = this.answer_f;
    // this.a_g = this.answer_g;
    // this.c_a = this.correct_answer;

    for (let [key, value] of Object.entries(quizData.correct_answers)) {
      if (value === "true") {
        let fullKey = key.split("_");

        this.correct_answer = fullKey[0] + "_" + fullKey[1];
        break;
      }
    }
  }

  formatQuestion(answer) {
    if (answer) {
      return answer.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    } else {
      return "";
    }
  }

  displayQuestions(number) {
    const questionContainer = document.getElementById("quiz-form");

    questionContainer.innerHTML += `<div class="question-container">
         <p class="question">${number}. ${this.question}</p>
         ${
           this.answer_a
             ? `<label><input type="checkbox" name="answer" value="answer_a" data-correct="${
                 this.correct_answer === "answer_a"
               }">${this.answer_a}</label><br>`
             : ""
         }
         ${
           this.answer_b
             ? `<label><input type="checkbox" name="answer" value="answer_b" data-correct="${
                 this.correct_answer === "answer_b"
               }">${this.answer_b}</label><br>`
             : ""
         }
         ${
           this.answer_c
             ? `<label><input type="checkbox" name="answer" value="answer_c" data-correct="${
                 this.correct_answer === "answer_c"
               }">${this.answer_c}</label><br>`
             : ""
         }
         ${
           this.answer_d
             ? `<label><input type="checkbox" name="answer" value="answer_d" data-correct="${
                 this.correct_answer === "answer_d"
               }">${this.answer_d}</label><br>`
             : ""
         }
         ${
           this.answer_e
             ? `<label><input type="checkbox" name="answer" value="answer_e" data-correct="${
                 this.correct_answer === "answer_e"
               }">${this.answer_e}</label><br>`
             : ""
         }
         ${
           this.answer_f
             ? `<label><input type="checkbox" name="answer" value="answer_f" data-correct="${
                 this.correct_answer === "answer_f"
               }">${this.answer_f}</label><br>`
             : ""
         }
         ${
           this.answer_g
             ? `<label><input type="checkbox" name="answer" value="answer_g" data-correct="${
                 this.correct_answer === "answer_g"
               }">${this.answer_g}</label><br>`
             : ""
         }
       </div>`;
  }
  // displayAnswers(number) {
  //   const answersContainer = document.getElementById("answers");
  //   answersContainer.innerHTML += `<div class="answers-container">
  //        <p class="question">${number}. ${this.q}</p>
  //        ${
  //          this.a_a
  //            ? `<label style="${
  //                this.c_a === "answer_a" ? "background-color: green;" : ""
  //              }"><input type="checkbox" name="answer" value="answer_a" data-correct="${
  //                this.c_a === "answer_a"
  //              }">${this.a_a}</label><br>`
  //            : ""
  //        }
  //        ${
  //          this.a_b
  //            ? `<label style="${
  //                this.correct_answer === "answer_b"
  //                  ? "background-color: green;"
  //                  : ""
  //              }"><input type="checkbox" name="answer" value="answer_b" data-correct="${
  //                this.correct_answer === "answer_b"
  //              }">${this.answer_b}</label><br>`
  //            : ""
  //        }
  //        ${
  //          this.answer_c
  //            ? `<label style="${
  //                this.correct_answer === "answer_c"
  //                  ? "background-color: green;"
  //                  : ""
  //              }"><input type="checkbox" name="answer" value="answer_c" data-correct="${
  //                this.correct_answer === "answer_c"
  //              }">${this.answer_c}</label><br>`
  //            : ""
  //        }
  //        ${
  //          this.answer_d
  //            ? `<label style="${
  //                this.correct_answer === "answer_d"
  //                  ? "background-color: green;"
  //                  : ""
  //              }"><input type="checkbox" name="answer" value="answer_d" data-correct="${
  //                this.correct_answer === "answer_d"
  //              }">${this.answer_d}</label><br>`
  //            : ""
  //        }
  //        ${
  //          this.answer_e
  //            ? `<label style="${
  //                this.correct_answer === "answer_e"
  //                  ? "background-color: green;"
  //                  : ""
  //              }"><input type="checkbox" name="answer" value="answer_e" data-correct="${
  //                this.correct_answer === "answer_e"
  //              }">${this.answer_e}</label><br>`
  //            : ""
  //        }
  //        ${
  //          this.answer_f
  //            ? `<label style="${
  //                this.correct_answer === "answer_f"
  //                  ? "background-color: green;"
  //                  : ""
  //              }"><input type="checkbox" name="answer" value="answer_f" data-correct="${
  //                this.correct_answer === "answer_f"
  //              }">${this.answer_f}</label><br>`
  //            : ""
  //        }
  //        ${
  //          this.answer_g
  //            ? `<label style="${
  //                this.correct_answer === "answer_g"
  //                  ? "background-color: green;"
  //                  : ""
  //              }"><input type="checkbox" name="answer" value="answer_g" data-correct="${
  //                this.correct_answer === "answer_g"
  //              }">${this.answer_g}</label><br>`
  //            : ""
  //        }
  //      </div>`;
  // }

  // serialize() {
  //   return {
  //     question: this.question,
  //     answers: {
  //       answer_a: this.answer_a,
  //       answer_b: this.answer_b,
  //       answer_c: this.answer_c,
  //       answer_d: this.answer_d,
  //       answer_e: this.answer_e,
  //       answer_f: this.answer_f,
  //       answer_g: this.answer_g,
  //     },
  //     correct_answer: this.correct_answer,
  //     q: this.q,
  //     a_a: this.a_a,
  //     a_b: this.a_b,
  //     a_c: this.a_c,
  //     a_d: this.a_d,
  //     a_e: this.a_e,
  //     a_f: this.a_f,
  //     a_g: this.a_g,
  //     c_a: this.c_a,
  //   };
  // }

  // // Static method for deserialization
  // static deserialize(data) {
  //   return new window.Quiz(data);
  // }
}
// window.Quiz = Quiz;

async function fetchQuiz(category, number, difficulty) {
  try {
    const response = await fetch(
      `${BASE_URL}apiKey=${APIKEY}&difficulty=${difficulty}&limit=${number}&tags=${category}`
    );
    const quizData = await response.json();
    const questions = [];
    quizData.forEach((question) => {
      if (question.multiple_correct_answers === "false") {
        // const serializedQuestion = new window.Quiz(question).serialize(); // Serialize the question object
        questions.push(new Quiz(question));
      }
    });
    localStorage.clear();
    localStorage.setItem("questions", JSON.stringify(questions));
    localStorage.setItem("question_number", JSON.stringify(questions.length));
    questions.forEach((question, i) => question.displayQuestions(i + 1));
  } catch (error) {
    console.error("Error fetching quiz data:", error);
    alert("Quiz not found, Try other options");
  }
}
const form = document.getElementById("quiz-options-form");
const quizForm = document.getElementById("quiz-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  quizForm.innerHTML = ``;
  fetchQuiz(form.category.value, form.number.value, form.difficulty.value);
  document.getElementById(
    "quiz-main-section1-header"
  ).innerHTML = `${form.category.value}, ${form.number.value} questions, ${form.difficulty.value}`;
  document.getElementById("quiz-options-form").innerHTML = "";
  const submit = document.createElement("button");
  submit.className = "submit-quiz";
  submit.innerHTML = "Submit Quiz";
  quizForm.appendChild(submit);
});

quizForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const questions = this.querySelectorAll(".question-container");

  let score = 0;

  questions.forEach((question) => {
    const checkboxes = question.querySelectorAll(
      'input[type="checkbox"]:checked'
    );

    checkboxes.forEach((checkbox) => {
      if (
        checkbox.value === question.querySelector('[data-correct="true"]').value
      ) {
        score++;
      }
    });
  });
  localStorage.setItem("score", JSON.stringify(score));

  window.location.href = "result.html";
});
