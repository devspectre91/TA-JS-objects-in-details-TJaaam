class Quiz {
    constructor(questionsArray) {
        this.allQuestions = questionsArray;
        this.activeIndex = 0;
        this.score = 0;
        this.flag = false;
    }
    previousQuestion() {


        if (this.activeIndex > 0) {
            this.activeIndex--;
            this.createUI();
        }
    }
    nextQuestion() {


        if (this.activeIndex < this.allQuestions.length - 1) {
            this.activeIndex++;
            // console.log(this.activeIndex);
            this.createUI();
        }
    }
    handleClick(e) {
        this.flag=!this.flag;
        if(this.flag){
            e.target.classList.add("selected");
           
        }
        else{
            e.target.classList.remove("selected");
           
        }
        console.log(e.target);

    }
    createUI() {
        let questionContainer = document.querySelector(".question-container");
        questionContainer.innerHTML = ""
       
        let currentQuestion = this.allQuestions[this.activeIndex];

        let question = new Question(currentQuestion.title, currentQuestion.options, currentQuestion.correctAnswer);

        question.createUI();
    }
    updateScore() {
        this.score++;
    }
}





class Question {

    constructor(title, options = [], correctAnswer) {
        this.title = title;
        this.options = options;
        this.selectedOptionIndex = "";
        this.correctAnswer = correctAnswer;
        
    }

    isCorrect(answer) {
        return (answer == this.correctAnswer);
    }

    getCorrectAnswer() {
        return this.correctAnswer;
    }
    //    handleClick(e){
    //        console.log(e.target);
    //    }
    createUI() {

        let question = document.createElement("div");
        question.id = "question";
        question.innerText = this.title;

        let optionA = document.createElement("div");
        optionA.id = "optionA";
        optionA.innerText = this.options[0];
        let optionB = document.createElement("div");
        optionB.id = "optionB";
        optionB.innerText = this.options[1];
        let optionC = document.createElement("div");
        optionC.id = "optionC";
        optionC.innerText = this.options[2];
        let optionD = document.createElement("div");
        optionD.id = "optionD";
        optionD.innerText = this.options[3];
        let qContainer = document.querySelector(".question-container");

        qContainer.append(question, optionA, optionB, optionC, optionD);


    }
}

let myQuiz = new Quiz(questionSet);
myQuiz.createUI();
let previousButton = document.getElementById("left-arrow");
let nextButton = document.getElementById("right-arrow");
let qContainer = document.querySelector(".question-container");
qContainer.addEventListener("click", myQuiz.handleClick)
previousButton.addEventListener("click", myQuiz.previousQuestion.bind(myQuiz));
nextButton.addEventListener("click", myQuiz.nextQuestion.bind(myQuiz));
