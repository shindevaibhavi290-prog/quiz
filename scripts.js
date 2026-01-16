const quiz = [
  {
    q: "HTML stands for?",
    options: ["Hyper Text Markup Language", "High Text Machine Language"],
    answer: 0
  },
  {
    q: "CSS is used for?",
    options: ["Styling", "Logic"],
    answer: 0
  },
  {
    q: "JavaScript is?",
    options: ["Programming Language", "Database"],
    answer: 0
  }
];

let index = 0;
let score = 0;

function loadQuestion() {
  document.getElementById("question").innerText = quiz[index].q;
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  quiz[index].options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(i);
    optionsDiv.appendChild(btn);
  });
}

function checkAnswer(i) {
  if (i === quiz[index].answer) {
    score++;
  }
}

function nextQuestion() {
  index++;
  if (index < quiz.length) {
    loadQuestion();
  } else {
    document.querySelector(".quiz-container").innerHTML =
      `<h1>Quiz Finished</h1><h2>Your Score: ${score}</h2>`;
  }
}

loadQuestion();
