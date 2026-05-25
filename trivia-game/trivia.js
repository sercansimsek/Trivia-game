const questionDiv = document.querySelector("#question");
const answerDiv = document.querySelector("#answer");
const feedbackDiv = document.querySelector("#feedback");
const newQuestionBtn = document.querySelector("#questionBtn");
const answerBtn = document.querySelector("#answerBtn");
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

answerBtn.addEventListener("click", () => {
  let feedbackMessage;
  const userAnswer = answerDiv.value.trim().toLowerCase();
  console.log(userAnswer, currentQuestion.answer);

  if (currentQuestion && userAnswer === currentQuestion.answer.toLowerCase()) {
    feedbackDiv.style.color = "green";
    feedbackMessage = `Great job! Your answer is correct`;
  } else {
    feedbackDiv.style.color = "red";
    feedbackMessage = `Sorry, that is incorrect. The correct answer is: '${currentQuestion.answer}'. Try another question!`;
  }
  feedbackDiv.textContent = feedbackMessage;
});
