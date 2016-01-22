var marketingQuiz = {
  userInput:{
    answers: []
  },
  quizData: {
    "questions": [
      {
        "id": "1",
        "question": "Which devices do you want to support?",
        "answers": [
          {
            "id": "1",
            "answer": "Phone",
            "scores": {
              "Native": 2,
              "Xamarin": 0,
              "Web": -1
            }
          },
          {
            "id": "2",
            "answer": "Tablet",
            "scores": {
              "Native": 2,
              "Xamarin": 0,
              "Web": -1
            },
            "excludes": [
              "2.1"
            ]
          }
        ],
        "type": "radio"
      },
      {
        "id": "2",
        "question": "Which devices do you want to support?",
        "answers": [
          {
            "id": "1",
            "answer": "Phone",
            "scores": {
              "Native": 2,
              "Xamarin": 0,
              "Web": -1
            }
          },
          {
            "id": "2",
            "answer": "Tablet",
            "scores": {
              "Native": 2,
              "Xamarin": 0,
              "Web": -1
            }
          }
        ],
        "type": "radio"
      }
    ],
    "results": [
      {
        "id": "Native",
        "Description": "Native apps offer the best performance and greatest flexibility. If your app is part of your core business and has a long live time then this most likely your best choice.",
        "icon": "todo.png"
      }
    ]
  }
}

marketingQuiz.clickQuestion = function (index) {
  marketingQuiz.userInput.answers.push(index);
  marketingQuiz.renderQuestion(marketingQuiz.userInput.answers.length);
  console.log('marketingQuiz.userInput.answers:', marketingQuiz.userInput.answers);
}

marketingQuiz.renderQuestion = function (questionsIndex) {
  console.log("questionsIndex", questionsIndex);

  var question = marketingQuiz.quizData.questions[questionsIndex];
  var element = $('#question');
  element.html('<div class="">'+question.question+'</div>');
  question.answers.forEach(function (answer, index) {
    element.append('<div class="" onclick="marketingQuiz.clickQuestion('+index+')">'+answer.answer+'</div>');
  });
}

$(function() {
  marketingQuiz.renderQuestion(marketingQuiz.userInput.answers.length);
});
