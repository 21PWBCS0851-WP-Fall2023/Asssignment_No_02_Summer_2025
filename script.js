// script.js
const questions = {
  html: [
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "Home Tool Markup Language",
        "Hyperlinks and Text Markup Language",
        "None of these",
      ],
      answer: 0,
    },
    {
      question: "Who is making the Web standards?",
      options: [
        "Mozilla",
        "Microsoft",
        "The World Wide Web Consortium",
        "Google",
      ],
      answer: 2,
    },
    {
      question: "Choose the correct HTML element for the largest heading:",
      options: ["<head>", "<h1>", "<h6>", "<heading>"],
      answer: 1,
    },
    {
      question: "What is the correct HTML element for inserting a line break?",
      options: ["<br>", "<lb>", "<break>", "<line>"],
      answer: 0,
    },
    {
      question: "What is the correct HTML for adding a background color?",
      options: [
        '<body bg="yellow">',
        "<background>yellow</background>",
        '<body style="background-color:yellow;">',
        '<bg color="yellow">',
      ],
      answer: 2,
    },
    {
      question: "Choose the correct HTML element to define important text",
      options: ["<strong>", "<b>", "<i>", "<important>"],
      answer: 0,
    },
    {
      question: "Choose the correct HTML element to define emphasized text",
      options: ["<italic>", "<i>", "<em>", "<emphasize>"],
      answer: 2,
    },
    {
      question: "What is the correct HTML for creating a hyperlink?",
      options: [
        '<a url="http://www.example.com">example</a>',
        '<a href="http://www.example.com">example</a>',
        "<a>http://www.example.com</a>",
        "<link>http://www.example.com</link>",
      ],
      answer: 1,
    },
    {
      question: "Which character is used to indicate an end tag?",
      options: ["*", "/", "<", "^"],
      answer: 1,
    },
    {
      question: "How can you open a link in a new tab/browser window?",
      options: [
        '<a href="url" target="new">',
        '<a href="url" new>',
        '<a href="url" target="_blank">',
        '<a href="url" target="_new">',
      ],
      answer: 2,
    },
  ],
  css: [
    {
      question: "What does CSS stand for?",
      options: [
        "Creative Style Sheets",
        "Cascading Style Sheets",
        "Computer Style Sheets",
        "Colorful Style Sheets",
      ],
      answer: 1,
    },
    {
      question:
        "What is the correct HTML for referring to an external style sheet?",
      options: [
        '<style src="mystyle.css">',
        "<stylesheet>mystyle.css</stylesheet>",
        '<link rel="stylesheet" type="text/css" href="mystyle.css">',
        "<css>mystyle.css</css>",
      ],
      answer: 2,
    },
    {
      question:
        "Where in an HTML document is the correct place to refer to an external style sheet?",
      options: [
        "In the <body> section",
        "At the end of the document",
        "In the <head> section",
        "In the <footer> section",
      ],
      answer: 2,
    },
    {
      question: "Which HTML tag is used to define an internal style sheet?",
      options: ["<css>", "<style>", "<script>", "<sheet>"],
      answer: 1,
    },
    {
      question: "Which HTML attribute is used to define inline styles?",
      options: ["class", "font", "styles", "style"],
      answer: 3,
    },
    {
      question: "Which is the correct CSS syntax?",
      options: [
        "body:color=black;",
        "{body;color:black;}",
        "{body:color=black;}",
        "body {color: black;}",
      ],
      answer: 3,
    },
    {
      question: "How do you insert a comment in a CSS file?",
      options: [
        "' this is a comment",
        "// this is a comment",
        "/* this is a comment */",
        "// this is a comment //",
      ],
      answer: 2,
    },
    {
      question: "Which property is used to change the background color?",
      options: ["color", "bgcolor", "background-color", "bg-color"],
      answer: 2,
    },
    {
      question: "How do you add a background color for all <h1> elements?",
      options: [
        "all.h1 {background-color:#FFFFFF;}",
        "h1.all {background-color:#FFFFFF;}",
        "h1 {background-color:#FFFFFF;}",
        "#h1 {background-color:#FFFFFF;}",
      ],
      answer: 2,
    },
    {
      question:
        "Which CSS property is used to change the text color of an element?",
      options: ["fgcolor", "text-color", "color", "font-color"],
      answer: 2,
    },
  ],
  js: [
    {
      question: "Where is the correct place to insert a JavaScript?",
      options: [
        "The <head> section",
        "The <body> section",
        "Both the <head> section and the <body> section are correct",
        "The <footer> section",
      ],
      answer: 2,
    },
    {
      question:
        'What is the correct syntax for referring to an external script called "xxx.js"?',
      options: [
        '<script href="xxx.js">',
        '<script name="xxx.js">',
        '<script src="xxx.js">',
        '<script file="xxx.js">',
      ],
      answer: 2,
    },
    {
      question: 'How do you write "Hello World" in an alert box?',
      options: [
        'msg("Hello World");',
        'alertBox("Hello World");',
        'msgBox("Hello World");',
        'alert("Hello World");',
      ],
      answer: 3,
    },
    {
      question: "How do you create a function in JavaScript?",
      options: [
        "function:myFunction()",
        "function myFunction()",
        "function = myFunction()",
        "def myFunction()",
      ],
      answer: 1,
    },
    {
      question: 'How do you call a function named "myFunction"?',
      options: [
        "call myFunction()",
        "call function myFunction()",
        "myFunction()",
        "execute myFunction()",
      ],
      answer: 2,
    },
    {
      question: "How to write an IF statement in JavaScript?",
      options: ["if i = 5 then", "if i == 5 then", "if (i == 5)", "if i = 5"],
      answer: 2,
    },
    {
      question: "How does a WHILE loop start?",
      options: [
        "while (i <= 10; i++)",
        "while i = 1 to 10",
        "while (i <= 10)",
        "while i <= 10",
      ],
      answer: 2,
    },
    {
      question: "How can you add a comment in a JavaScript?",
      options: [
        "//This is a comment",
        "<!--This is a comment-->",
        "'This is a comment",
        "/* This is a comment */",
      ],
      answer: 0,
    },
    {
      question: "What is the correct way to write a JavaScript array?",
      options: [
        'var colors = (1:"red", 2:"green", 3:"blue")',
        'var colors = ["red", "green", "blue"]',
        'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")',
        'var colors = "red", "green", "blue"',
      ],
      answer: 1,
    },
    {
      question: "How do you round the number 7.25, to the nearest integer?",
      options: [
        "rnd(7.25)",
        "Math.round(7.25)",
        "Math.rnd(7.25)",
        "round(7.25)",
      ],
      answer: 1,
    },
  ],
};

let currentSubject;
let currentQuestion = 0;
let answers = [];
let timer;
let timeLeft = 15;

function startQuiz(subject) {
  currentSubject = subject;
  currentQuestion = 0;
  answers = Array(questions[subject].length).fill(null);
  document.getElementById("landing").classList.add("d-none");
  document.getElementById("quiz").classList.remove("d-none");
  document.getElementById("subject").innerText =
    subject.toUpperCase() + " Quiz";
  loadQuestion();
}

function loadQuestion() {
  clearInterval(timer);
  timeLeft = 15;
  document.getElementById("time").innerText = timeLeft;
  document.getElementById("timer").classList.remove("low-time");
  timer = setInterval(countdown, 1000);

  let q = questions[currentSubject][currentQuestion];
  document.getElementById("question").innerHTML = `<h4 class="question">${
    currentQuestion + 1
  }. ${q.question}</h4>`;
  let opts = "";
  q.options.forEach((opt, i) => {
    const escapedOpt = opt.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    opts += `<div class="form-check">
            <input class="form-check-input" type="radio" name="option" id="opt${i}" value="${i}" ${
      answers[currentQuestion] === i ? "checked" : ""
    } onclick="enableNext()">
            <label class="form-check-label" for="opt${i}">${escapedOpt}</label>
        </div>`;
  });
  document.getElementById("options").innerHTML = opts;
  document.getElementById("prev").disabled = currentQuestion === 0;
  document.getElementById("next").disabled = answers[currentQuestion] === null;
  if (currentQuestion === questions[currentSubject].length - 1) {
    document.getElementById("next").innerText = "Submit";
  } else {
    document.getElementById("next").innerText = "Next";
  }
}

function enableNext() {
  document.getElementById("next").disabled = false;
}

function countdown() {
  timeLeft--;
  document.getElementById("time").innerText = timeLeft;
  if (timeLeft <= 5) {
    document.getElementById("timer").classList.add("low-time");
  }
  if (timeLeft === 0) {
    clearInterval(timer);
    nextQuestion();
  }
}

function prevQuestion() {
  answers[currentQuestion] = getSelected();
  currentQuestion--;
  loadQuestion();
}

function nextQuestion() {
  answers[currentQuestion] = getSelected();
  if (currentQuestion < questions[currentSubject].length - 1) {
    currentQuestion++;
    loadQuestion();
  } else {
    showResults();
  }
}

function getSelected() {
  let radios = document.querySelectorAll('input[name="option"]');
  for (let radio of radios) {
    if (radio.checked) return parseInt(radio.value);
  }
  return null;
}

function showResults() {
  clearInterval(timer);
  document.getElementById("quiz").classList.add("d-none");
  document.getElementById("results").classList.remove("d-none");
  let score = 0;
  let html = "";
  questions[currentSubject].forEach((q, i) => {
    let correct = q.answer;
    let selected = answers[i];
    const escapedSelected =
      selected !== null
        ? q.options[selected].replace(/</g, "&lt;").replace(/>/g, "&gt;")
        : "No answer";
    const escapedCorrect = q.options[correct]
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    let status =
      selected === null
        ? "No answer"
        : selected === correct
        ? "(Correct)"
        : `(Incorrect, correct is ${escapedCorrect})`;
    let color =
      selected === null
        ? "text-danger"
        : selected === correct
        ? "text-success"
        : "text-danger";
    html += `<div class="mb-3">
            <h5>${i + 1}. ${q.question}</h5>
            <p class="${color}">Your answer: ${escapedSelected} ${status}</p>
        </div>`;
    if (selected === correct) score++;
  });
  document.getElementById("answers").innerHTML = html;
  let percent = (score / questions[currentSubject].length) * 100;
  document.getElementById("score").innerHTML = `<h3>Score: ${score}/${
    questions[currentSubject].length
  } (${percent.toFixed(2)}%)</h3>`;
  saveToLeaderboard(score);
}

function saveToLeaderboard(score) {
  let username = prompt("Enter your username:");
  if (username) {
    let lb = JSON.parse(localStorage.getItem("leaderboard")) || [];
    lb.push({ name: username, score: score });
    localStorage.setItem("leaderboard", JSON.stringify(lb));
  }
}

function retake() {
  document.getElementById("results").classList.add("d-none");
  startQuiz(currentSubject);
}

function anotherSubject() {
  document.getElementById("results").classList.add("d-none");
  backToLanding();
}

function backToLanding() {
  document.getElementById("leaderboard").classList.add("d-none");
  document.getElementById("results").classList.add("d-none");
  document.getElementById("quiz").classList.add("d-none");
  document.getElementById("landing").classList.remove("d-none");
}

function showLeaderboard() {
  document.getElementById("landing").classList.add("d-none");
  document.getElementById("leaderboard").classList.remove("d-none");
  let lb = JSON.parse(localStorage.getItem("leaderboard")) || [];
  lb.sort((a, b) => b.score - a.score);
  let top5 = lb.slice(0, 5);
  let list = "";
  top5.forEach((item, i) => {
    list += `<li class="list-group-item">${i + 1}. ${item.name} - ${
      item.score
    }</li>`;
  });
  document.getElementById("leaderboard-list").innerHTML = list;
}

document.getElementById("prev").addEventListener("click", prevQuestion);
document.getElementById("next").addEventListener("click", nextQuestion);
