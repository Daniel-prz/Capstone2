const storedScore = localStorage.getItem("score");
if (storedScore) {
  const score = JSON.parse(storedScore);
  console.log(score);
  const results = document.getElementById("score");
  results.innerHTML += score;
}
const storedNumber = localStorage.getItem("question_number");
if (storedNumber) {
  const number = JSON.parse(storedNumber);
  console.log(number);
  const questionNumber = document.getElementById("number");
  questionNumber.innerHTML += number;
}
const storedQuestions = localStorage.getItem("questions");
if (storedQuestions) {
  const questions = JSON.parse(storedQuestions);
  console.log(questions);
}
// CODE DOES NOT RUN BELOW LINE 13
//   const quizAnswers = [];
//   questions.forEach((question) => {
//     quizAnswers.push(window.Quiz.deserialize(question));
//   });
//   console.log(quizAnswers);
//   quizAnswers.forEach((question, i) => {
//     if (typeof question.displayAnswers === "function") {
//       question.displayAnswers(i + 1);
//     } else {
//       console.error(`Question ${i + 1} does not have a displayAnswers method.`);
//     }
//   });
// } else {
//   console.error("No questions found in local storage.");
// }
