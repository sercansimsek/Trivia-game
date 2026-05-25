const questionDiv = document.querySelector("#question");
const answerDiv = document.querySelector("#answer");
const feedbackDiv = document.querySelector("#feedback");
const newQuestionBtn = document.querySelector("#questionBtn");
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

function displayQuestion(triviaQuestion) {
  questionDiv.textContent = `${triviaQuestion.question}`;
  answerDiv.value = "";
  feedbackDiv.textContent = "";
}

newQuestionBtn.addEventListener("click", () => {
  getTriviaQuestion()
    .then((question) => {
      currentQuestion = question;
      displayQuestion(question);
    })
    .catch((error) => {
      console.error(error);
    });
});
