class quiz {
    constructor() {
        this.allQuestions = [];
        this.activeIndex = 0;
        this.score = 0;
    }

    nextQuestion() {
        this.activeIndex++;
        this.createUI();
    }
    createUI() {

    }
    updateScore() {
        this.score++;
    }
}





class Question {

    constructor(title, options = [], correctAnswer) {
        this.title = title;
        this.options = options;
        this.correctAnswer = correctAnswer;
    }

    isCorrect(answer) {
        return (answer == this.correctAnswer);
    }

    getCorrectAnswer() {
        return this.correctAnswer;
    }

    createUI() {

    }
}
