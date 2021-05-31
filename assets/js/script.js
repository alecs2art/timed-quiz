
var quizButton = document.querySelector('.start-quiz');

var quizBox = document.querySelector('.quiz-section');

var questionLine = document.querySelector('.title');

var choiceLine = document.querySelector('.text')

var timeDisplay = document.querySelector('.time');

var timer = 60;



var questions = [
    {
        question: "What year was JavaScript created?",
        choices: ["1991", "2007", "2000", "1995"],
        answer: 3
    },

    {
        question: "Web API stands for?",
        choices: ["Application Programing Interface", "Armor Piercing Incendiary", "Asset Priority index", "After Project Initiation"],
        answer: 0
    },

    {
        question: "How to create a variable?",
        choices: [".. var", "<variable>", "var ''", "var/"],
        answer: 2
    },

    {
        question: "How many values does a boolean type allow?",
        choices: ["1", "2", "3", "4"],
        answer: 1
    }

];

 function startTimer() {
     var counter = setInterval(function() { 
         if (timer >= 0) {
             timeDisplay.textContent = 'Time:' + timer 
             timer--;
         } else {
             timeDisplay.textContent = "";
             clearInterval(counter);
         }
     }, 1000);
    }


    quizButton.addEventListener('click', function() {

        startTimer();

        for(var i =0; i < questions.length; i++) {

        
            questionLine.innerHTML = questions[i].question;

            var form = document.createElement("input");
            form.setAttribute("type", "radio");
            

            choiceLine.innerHTML = form;

       }
    });