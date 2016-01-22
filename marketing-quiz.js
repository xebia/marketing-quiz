var marketingQuiz = (function () {
  var self = this;

  function clickQuestion (index) {
    marketingQuiz.userInput.answers.push(index);
    marketingQuiz.renderQuestion(marketingQuiz.userInput.answers.length);
    console.log('marketingQuiz.userInput.answers:', marketingQuiz.userInput.answers);
  }

  function renderQuestion (questionsIndex) {
    console.log("questionsIndex", questionsIndex);

    var question = marketingQuiz.quizData.questions[questionsIndex];
    var element = $('#question');
    element.html('<div class="">'+question.question+'</div>');

    var rowElement = element.append('<div class="row"></div>');
    question.answers.forEach(function (answer, index) {
      rowElement.append('<div class="col-md-4" onclick="marketingQuiz.clickQuestion('+index+')">'+answer.answer+'</div>');
    });

  }

  return {
    clickQuestion: clickQuestion,
    renderQuestion: renderQuestion,
    userInput:{
      answers: []
    },
    quizData: {
      "questions": [
        {
          "id": "1",
          "question": "Will the app be part of your core business?",
          "answers": [
            {
              "id": "1",
              "answer": "Yes",
              "scores": {
                "Native": 2,
                "Xamarin": 0,
                "Web": -1
              }
            },
            {
              "id": "2",
              "answer": "No",
              "scores": {
                "Native": 2,
                "Xamarin": 0,
                "Web": -1
              },
              "excludes": ["2.1"
              ]
            },
            {
              "id": "2",
              "answer": "Not sure",
              "scores": {
                "Native": 2,
                "Xamarin": 0,
                "Web": -1
              },
              "excludes": []
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
              },
              "excludes": [
                "2.1"
              ]
            },
            {
              "id": "2",
              "answer": "Both",
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
          "id": "3",
          "question": "Which platforms do you want to support?",
          "answers": [
            {
              "id": "1",
              "answer": "iOS",
              "scores": {
                "Native": 2,
                "Xamarin": 0,
                "Web": -1
              }
            },
            {
              "id": "2",
              "answer": "Android",
              "scores": {
                "Native": 2,
                "Xamarin": 0,
                "Web": -1
              },
              "excludes": [
                "2.1"
              ]
            },
            {
              "id": "3",
              "answer": "Windows",
              "scores": {
                "Native": 2,
                "Xamarin": 0,
                "Web": -1
              },
              "excludes": [
                "2.1"
              ]
            },
            {
              "id": "4",
              "answer": "Not Shure Yet",
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
          "type": "checkbox"
        },
        {
          "id": "4",
          "question": "Please mark all categories that describe your app?",
          "answers": [
            {
              "id": "1",
              "answer": "Puzzle Game"
            },{
              "id": "2",
              "answer": "3D Game"
            },{
              "id": "3",
              "answer": "Social App"
            },{
              "id": "4",
              "answer": "Productivity"
            },{
              "id": "5",
              "answer": "Promotional"
            },{
              "id": "6",
              "answer": "Business"
            },{
              "id": "7",
              "answer": "Education"
            },{
              "id": "8",
              "answer": "Travel"
            }

          ],
          "type": "checkbox"
        },
        {
          "id": "1",
          "question": "Which description best describes your app",
          "answers": [
            {
              "id": "1",
              "answer": "It’s mainly tables with text and numbers"
            },{
              "id": "2",
              "answer": "The users need to fill in forms and submit data"
            },{
              "id": "3",
              "answer": "A lot of custom graphics and animations"
            },{
              "id": "4",
              "answer": "It only has one or two screens"
            },{
              "id": "5",
              "answer": "It contains the same information as our (corporate) website"
            },{
              "id": "6",
              "answer": "None of the others"
            }
          ],
          "type": "checkbox"
        },
        {
          "id": "2",
          "question": "Which of the following features does your app need?",
          "answers": [
            {
              "id": "1",
              "answer": "Maps"
            },{
              "id": "2",
              "answer": "Microphone"
            },{
              "id": "3",
              "answer": "Push Notifications"
            },{
              "id": "4",
              "answer": "Offline Mode"
            },{
              "id": "5",
              "answer": "Data storage on device"
            }
          ],
          "type": "checkbox"
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
  };
})();

$(function() {
  marketingQuiz.renderQuestion(marketingQuiz.userInput.answers.length);
});
