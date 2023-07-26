var submitForm = document.getElementById('login_form');
submitForm.addEventListener('submit', checkLogin);


const initialUsers = [
  { email: '', password: '' },
  { email: 'joeblocks@skippers.net.au', password: 'skippers123' },
  { email: 'jimbob@skippers.net.au', password: '123skippers' },
  
];
if (!localStorage.getItem('users')) {
  storeUsersToLocalStorage(initialUsers);
}


function storeUsersToLocalStorage(users) {
    localStorage.setItem('users', JSON.stringify(users));
  }
  
  function getUsersFromLocalStorage() {
    const usersString = localStorage.getItem('users');
    return JSON.parse(usersString) || [];
  }
  
  function checkLogin(event) {
    event.preventDefault();
    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('password');
    var messageElement = document.getElementById('message');
    var enteredEmail = emailInput.value;
    var enteredPassword = passwordInput.value;
    
    var usersFromLocalStorage = getUsersFromLocalStorage();
    
    const user = usersFromLocalStorage.find(u => u.email === enteredEmail && u.password === enteredPassword);
    console.log(user);
    if (user) {
      window.location.replace('homepage.html');
    } else {
     messageElement.textContent = 'Invalid email or password. Please try again.';
    }
    
    emailInput.value = '';
    passwordInput.value = '';
  }

=======
const start_btn = document.querySelector(".start-btn button");
const main_page = document.querySelector(".main-page");
const quiz_page = document.querySelector(".quiz-page");
const result_page = document.querySelector(".result-page");
const options = document.querySelector(".options");
const timeLeft = document.querySelector(".timer .time-left");
const countdown = document.querySelector(".timer .countdown");

start_btn.addEventListener('click', (event) => {
    event.preventDefault();

    main_page.style.display = "none";
    quiz_page.style.display = "block";
    showQuestions(0);
    startTimer(60);
});

let index = 0;
let timeValue = 60;
let userScore = 0;
let counter;
let counterLine;

function showQuestions(index) {
    const que_text = document.querySelector(".question-txt");

    let que_tag = '<span>'+ questions[index].question +'</span>';
    let choice_tag = '<div class="choice"><button>'+ questions[index].choices[0] +'</button></div>'
    + '<div class="choice"><button>'+ questions[index].choices[1] +'</button></div>'
    + '<div class="choice"><button>'+ questions[index].choices[2] +'</button></div>'
    + '<div class="choice"><button>'+ questions[index].choices[3] +'</button></div>';
    que_text.innerHTML = que_tag;
    options.innerHTML = choice_tag;

    const choice = options.querySelectorAll(".choice");

    for(i=0; i < choice.length; i++) {
        choice[i].setAttribute("onclick", "choiceSelected(this, " + index + ")");
    }
}

function choiceSelected(answer, index) {
    let userAns = answer.textContent;
    let correctAns = questions[index].answer;
    const allOptions = options.children.length;

    if(userAns == correctAns) {
        userScore += 10;
        answer.classList.add("correct");
        console.log("Correct Answer");
    
        
    } else {
        answer.classList.add("incorrect");
        console.log("Wrong Answer");
        
        timeValue -= 10;

    if  (timeValue < 0) {
        timeValue = 0;
    }

        countdown.textContent = timeValue;
    }

        for(i=0; i < allOptions; i++) {
            if(options.children[i].textContent == correctAns) {
                options.children[i].setAttribute("class", "choice correct");

            }
        }
    
    index++;
    
    if (index < questions.length) {
        setTimeout(function() {
            showQuestions(index);
        }, 1000);
    } else {
        setTimeout(function() {
            showResults();
            timeLeft.textContent = "Time's up!";
            countdown.textContent = "";
            clearInterval(counter);
        }, 1000);
    }
    for(let i = 0; i < allOptions; i++) {
        options.children[i].classList.add("disabled");
        options.children[i].setAttribute("onclick", "");

    }

}

function showResults() {
    quiz_page.style.display = "none";
    result_page.style.display = "block";

    const scoreText = document.querySelector(".result-page .final-score");
    scoreText.textContent = "Your score: " + userScore;

}

document.addEventListener("DOMContentLoaded", function() {
    const submitBtn = document.getElementById("submit-btn");
    const usernameInput = document.getElementById("username-input");

    submitBtn.addEventListener("click", function(event) {
        event.preventDefault();

    const playerName = usernameInput.value;
    const score = {
        name: playerName,
        score: userScore
    };

    const highscores = JSON.parse(localStorage.getItem("highscores")) || [];

    highscores.push(score);

    localStorage.setItem("highscores", JSON.stringify(highscores));

    const url = "./highscores.html";
    window.location.href = url;

    });

});

function startTimer(time) {
    timeValue = time;
    countdown.textContent = timeValue;
    counter = setInterval(timer, 1000);

    function timer() {
        timeValue--;
        countdown.textContent = timeValue;
        time--;
        
        if (timeValue === 0) {
            clearInterval(counter);
            timeLeft.textContent = "Time's up!";
            countdown.textContent = "";
            showResults();
        }

    }
}