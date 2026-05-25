const questionDiv = document.querySelector("#question");
const answerDiv = document.querySelector("#answer");
const feedbackDiv = document.querySelector("#feedback");
let currentQuestion = null;

function getTriviaQuestion() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const index = Math.floor(Math.random() * questions.length);
      const question = questions[index];
      if (index > questions.length) {
        reject("An error occurred while fetching the trivia question.");
      } else {
        resolve(question);
      }
    }, 1000);
  });
}
