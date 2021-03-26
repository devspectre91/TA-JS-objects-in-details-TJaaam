If we want to build any app the two most important thing to think about is Data and Behavior. So for our quiz app let's break it down. To make a quiz app we need to create Single Question object.

### For single question we need the following data and methods:

- Data:
     - `title` (title of the question)
     - `options` (array of options)
     - `correctAnswerIndex` (index of the correct option)
- Methods:
     - `isAnswerCorrect` (will accept the index and returns `true` or `false` based on the answer is correct or not)
     - `getCorrectAnswer` (will return the correct answer of the quiz when the function is called)

### Create the object using the following ways

For each different ways of creating object write different solutions.

- Without Object

```js
//data
var title1;
var options1 = [];
var correctAnswerIndex1;

//method
function isAnswerCorrect(myAnswer) {
	if (optionss1[correctAnswerIndex1] == myAnswer) {
		return true;
	} else {
		return false;
	}
}
function getCorrectAnswer() {
	return options1[correctAnswerIndex1];
}
```

- Organize using object

```js
let question1 = {
	title: testData.title,
	options: testData.options,
	correctAnswerIndex: testData.correctAnswerIndex,
	isAnswerCorrect: function (myAnswer) {
		if (question1.correctAnswerIndex == myAnswer) {
			return true;
		} else {
			return false;
		}
	},
	getCorrectAnswer: function () {
		return question1.options[question1.correctAnswerIndex];
	},
};
```

- Use a function to create object

```js
function createQuestion(testData) {
	let question = {
		title1: testData.title,
		options1: testData.options,
		correctAnswerIndex: testData.correctAnswerIndex,
		isAnswerCorrect: function (myAnswer) {
			if (question1.correctAnswerIndex == myAnswer) {
				return true;
			} else {
				return false;
			}
		},
		getCorrectAnswer: function () {
			return question1.options[question1.correctAnswerIndex];
		},
	};
	return question;
}
```

- Convert the function to use `this` keyword

```js
function createQuestion(testData) {
	let question = {};
	question.title = testData.title;
	question.options = testData.options;
	question.correctAnswerIndex = testData.correctAnswerIndex;
	question.isAnswerCorrect = function (myAnswer) {
		if (this.correctAnswerIndex == myAnswer) {
			return true;
		} else {
			return false;
		}
	};
	question.getCorrectAnswer = function () {
		return this.options[this.correctAnswerIndex];
	};

	return question;
}
```

- Write test by creating two objects also test both methods.

```js
const testData = {
	title: "Where is the capital of India",
	options: ["New Delhi", "Ahmedabad", "Mumbai", "Bangalore"],
	correctAnswerIndex: 0,
};
const testData = {
	title: "Where is the capital of Madhya Pradesh",
	options: ["Sagar", "Indore", "bhopal", "Jabalpur"],
	correctAnswerIndex: 2,
};
```

### To test use the following data

```js
const testData = {
	title: "Where is the capital of Jordan",
	options: ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
	correctAnswerIndex: 1,
};
```
