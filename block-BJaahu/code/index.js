

//Prototypal pattern

function createQuestion(title, options, correcAnswerIndex) {
    let question = Object.create(questionMethods);
    question.title = title;
    question.options = options;
    question.correcAnswerIndex = correcAnswerIndex;


    return question;
}
let questionMethods = {
    isAnswerCorrect: function (index) {
        if (this.correcAnswerIndex == index) {
            return true;
        } else { return false; }
    },
    getCorrectAnswer: function () {
        return this.options[this.correcAnswerIndex];
    }
};

let firstQuestion = createQuestion(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
);
let secondQuestion = createQuestion(
    'Where is the capital of Jamaica',
    ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
    2
);

//Pseudoclassical Pattern: 

function CreateQuestion(title, options, correcAnswerIndex) {

    this.title = title;
    this.options = options;
    this.correcAnswerIndex = correcAnswerIndex;



}

//Putting our methods in predefined object that is present in every function
CreateQuestion.prototype = {
    isAnswerCorrect: function (index) {
        if (this.correcAnswerIndex == index) {
            return true;
        } else { return false; }
    },
    getCorrectAnswer: function () {
        return this.options[this.correcAnswerIndex];
    }
};

let firstQuestion = new CreateQuestion(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
);
let secondQuestion = new CreateQuestion(
    'Where is the capital of Jamaica',
    ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
    2
);

 Using class pattern


class Question {
    constructor(title, options, correcAnswerIndex) {
        this.title = title;
        this.options = options;
        this.correcAnswerIndex = correcAnswerIndex;
    }

    isAnswerCorrect(index) {
        if (this.correcAnswerIndex == index) {
            return true;
        } else { return false; }
    }
    getCorrectAnswer() {
        return this.options[this.correcAnswerIndex];
    }

}

let firstQuestion = new Question(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
);
let secondQuestion = new Question(
    'Where is the capital of Jamaica',
    ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
    2
);