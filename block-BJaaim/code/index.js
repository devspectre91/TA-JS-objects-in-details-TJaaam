class Quiz {
    constructor(questionsArray) {
        this.allQuestions = questionsArray;
        this.activeIndex = 0;
        this.score = 0;
    }
    previousQuestion() {
        
       
        if(this.activeIndex>0){
            this.activeIndex--;
            console.log(this.activeIndex)
        this.createUI();}
    }
    nextQuestion() {
        
        
        if(this.activeIndex<this.allQuestions.length-1){
            this.activeIndex++;
        console.log(this.activeIndex);
        this.createUI();}
    } 
    createUI() {
        document.querySelector(".question-container").innerHTML="";
       let currentQuestion= this.allQuestions[this.activeIndex];
    
       let question= new Question(currentQuestion.title,currentQuestion.options,currentQuestion.correctAnswer );
      
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
        this.selectedOptionIndex="";
        this.correctAnswer = correctAnswer;
        this.flag=false;
    }

    isCorrect(answer) {
        return (answer == this.correctAnswer);
    }
    handleClick(e){
        this.flag=!this.flag;
        if(this.flag){

        }
        console.log(e.target)
    }
    getCorrectAnswer() {
        return this.correctAnswer;
    }

    createUI() {
        let question =document.createElement("div");
        question.id="question";
        question.innerText= this.title;
        
        let optionA =document.createElement("div");
        optionA.id="optionA";
        optionA.innerText=this.options[0];
        let optionB =document.createElement("div");
        optionB.id="optionB";
        optionB.innerText=this.options[1];
        let optionC =document.createElement("div");
        optionC.id="optionC";
        optionC.innerText=this.options[2];
        let optionD =document.createElement("div");
        optionD.id="optionD";
        optionD.innerText=this.options[3];
        let qContainer= document.querySelector(".question-container");
     
        
        qContainer.append(question, optionA, optionB, optionC, optionD);

    }
}

let myQuiz = new Quiz(questionSet);
myQuiz.createUI();
let previousButton=document.getElementById("left-arrow");
let nextButton=document.getElementById("right-arrow");
previousButton.addEventListener("click", myQuiz.previousQuestion.bind(myQuiz));
nextButton.addEventListener("click", myQuiz.nextQuestion.bind(myQuiz));
