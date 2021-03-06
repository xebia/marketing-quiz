var marketingQuiz = (function () {

  function clickQuestion (index) {
    marketingQuiz.userInput.answers.push(index);
    if (isFinished()) {
      window.location.href = redirectTo(calculateAdvice(marketingQuiz.userInput.answers)) + '/';
    } else {
      marketingQuiz.renderQuestion(marketingQuiz.userInput.answers.length);
    }
  }

  function renderQuestion (questionsIndex) {
    console.log("questionsIndex", questionsIndex);

    var question = marketingQuiz.quizData.questions[questionsIndex];
    var element = $('#question');
    element.html('<div class="container-fluid main-title"><h1>'+question.question+'</h1></div><hr class="top">');




    var rowElement = element.append('<div class="row"></div>');
    question.answers.forEach(function (answer, index) {
      var tpl = '<div class="col-md-4">';
      tpl += '<div onclick="marketingQuiz.clickQuestion('+index+')" class="circle" style="background:'+answer.color+';"><span></span><p><img src="images/icon/'+answer.icon+'"/></p></div>';
      tpl += '<button type="button" onclick="marketingQuiz.clickQuestion('+index+')" class="btn btn-primary btn-block answer-btn">'+answer.answer+'</button>'
      tpl += '</div>';
      rowElement.append(tpl);
    });

  }

  function isFinished () {
    return marketingQuiz.quizData.questions.length <= marketingQuiz.userInput.answers.length
  }

  function calculateAdvice (userAnswers) {
    var results = {};

    marketingQuiz.quizData.questions.forEach(function (question) {
      question.answers.forEach(function (answer, answerIndex) {
        if (!answer.scores) {
          return;
        };

        //is answer selected by user.
        if (userAnswers[answerIndex] && userAnswers[answerIndex] === answerIndex) {
          return;
        };

        Object.keys(answer.scores).forEach(function (key) {
            if (results[key]) {
              results[key] = results[key] + answer.scores[key];
            } else {
              results[key] = answer.scores[key];
            }
        });
      });
    });

    console.log("results", results);
    return results;
  }

  function redirectTo (results) {
    var highest = undefined;
    var highestScore = undefined;
    Object.keys(results).forEach(function (key) {
      if (highest) {
        if (results[key] > highestScore) {
          highest = key;
          highestScore = results[key];
        }
      } else {
        highest = key;
        highestScore = results[key];
      }
    });

    return highest;
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
              "icon": "yes.png",
              "color": "#4CAF50",
              "scores": {
                "native": 2,
                "xamarin": 1,
                "reactnative": 1,
                "hybrid": 0,
                "web": -1,
              }
            },
            {
              "id": "2",
              "answer": "No",
              "icon": "no.png",
              "color": "#F44336",
              "scores": {
                "native": -1,
                "xamarin": 0,
                "reactnative": 0,
                "hybrid": 1,
                "web": 1,
              }
            },
            {
              "id": "2",
              "answer": "Not sure",
              "icon": "question_mark.png",
              "color": "#9E9E9E",
              "scores": {
                "native": 0,
                "xamarin": 1,
                "reactnative": 1,
                "hybrid": 0,
                "web": 0,
              }
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
              "icon": "phone.png",
              "color": "#2196F3",
              "scores": {
                "native": 1,
                "xamarin": 1,
                "reactnative": 1,
                "hybrid": 1,
                "web": 1,
              }
            },
            {
              "id": "2",
              "answer": "Tablet",
              "icon": "tablet.png",
              "color": "#3F51B5",
              "scores": {
                "native": 2,
                "xamarin": 2,
                "reactnative": 2,
                "hybrid": 1,
                "web": 0,
              }
            },
            {
              "id": "2",
              "answer": "Both",
              "icon": "phone_tablet.png",
              "color": "#673AB7",
              "scores": {
                "native": 2,
                "xamarin": 0,
                "reactnative": 0,
                "hybrid": 1,
                "web": 2,
              }
            }
          ],
          "type": "radio"
        },
        // {
        //   "id": "3",
        //   "question": "Which platforms do you want to support?",
        //   "answers": [
        //     {
        //       "id": "1",
        //       "answer": "iOS",
        //       "scores": {
        //         "native": ,
        //         "xamarin": ,
        //         "reactnative": ,
        //         "hybrid": ,
        //         "web": -,
        //       }
        //     },
        //     {
        //       "id": "2",
        //       "answer": "Android",
        //       "scores": {
        //         "native": ,
        //         "xamarin": ,
        //         "reactnative": ,
        //         "hybrid": ,
        //         "web": -,
        //       },
        //       "excludes": [
        //         "2.1"
        //       ]
        //     },
        //     {
        //       "id": "3",
        //       "answer": "Windows",
        //       "scores": {
        //         "native": ,
        //         "xamarin": ,
        //         "reactnative": ,
        //         "hybrid": ,
        //         "web": -,
        //       },
        //       "excludes": [
        //         "2.1"
        //       ]
        //     },
        //     {
        //       "id": "4",
        //       "answer": "Not Shure Yet",
        //       "scores": {
        //         "native": ,
        //         "xamarin": ,
        //         "reactnative": ,
        //         "hybrid": ,
        //         "web": -,
        //       },
        //       "excludes": [
        //         "2.1"
        //       ]
        //     }
        //   ],
        //   "type": "checkbox"
        // },
        // {
        //   "id": "4",
        //   "question": "Please mark all categories that describe your app?",
        //   "answers": [
        //     {
        //       "id": "1",
        //       "answer": "Puzzle Game"
        //     },{
        //       "id": "2",
        //       "answer": "3D Game"
        //     },{
        //       "id": "3",
        //       "answer": "Social App"
        //     },{
        //       "id": "4",
        //       "answer": "Productivity"
        //     },{
        //       "id": "5",
        //       "answer": "Promotional"
        //     },{
        //       "id": "6",
        //       "answer": "Business"
        //     },{
        //       "id": "7",
        //       "answer": "Education"
        //     },{
        //       "id": "8",
        //       "answer": "Travel"
        //     }

        //   ],
        //   "type": "checkbox"
        // },
        {
          "id": "1",
          "question": "Which description best describes your app",
          "answers": [
            {
              "id": "1",
              "answer": "It’s mainly tables with text and numbers",
              "icon": "phone_tables.png",
              "color": "#2196F3",
              "scores": {
                "native": 1,
                "xamarin": 2,
                "reactnative": 2,
                "hybrid": 1,
                "web": 0,
              }
            },{
              "id": "2",
              "answer": "The users need to fill in forms and submit data",
              "icon": "phone_form.png",
              "color": "#CDDC39",
              "scores": {
                "native": 0,
                "xamarin": 3,
                "reactnative": 1,
                "hybrid": 2,
                "web": 2,
              }
            },{
              "id": "3",
              "answer": "A lot of custom graphics and animations",
              "icon": "phone_graphics.png",
              "color": "#FF5722",
              "scores": {
                "native": 2,
                "xamarin": 0,
                "reactnative": 0,
                "hybrid": 1,
                "web": 1,
              }
            },{
              "id": "4",
              "answer": "It only has one or two screens",
              "icon": "phone_two_screens.png",
              "color": "#E91E63",
              "scores": {
                "native": 0,
                "xamarin": 1,
                "reactnative": 1,
                "hybrid": 2,
                "web": 2,
              }
            },{
              "id": "5",
              "answer": "It contains the same information as our (corporate) website",
              "icon": "phone_web.png",
              "color": "#FFC107",
              "scores": {
                "native": 0,
                "xamarin": 0,
                "reactnative": 1,
                "hybrid": 2,
                "web": 3,
              }
            },{
              "id": "6",
              "answer": "None of the others",
              "icon": "cross.png",
              "color": "#9E9E9E",
              "scores": {
                "native": 3,
                "xamarin": 2,
                "reactnative": 1,
                "hybrid": 0,
                "web": 0,
              }
            }
          ],
          "type": "checkbox"
        },
        // {
        //   "id": "2",
        //   "question": "Which of the following features does your app need?",
        //   "answers": [
        //     {
        //       "id": "1",
        //       "answer": "Maps"
        //     },{
        //       "id": "2",
        //       "answer": "Microphone"
        //     },{
        //       "id": "3",
        //       "answer": "Push Notifications"
        //     },{
        //       "id": "4",
        //       "answer": "Offline Mode"
        //     },{
        //       "id": "5",
        //       "answer": "Data storage on device"
        //     }
        //   ],
        //   "type": "checkbox"
        // }
      ],
      "results": [
        {
          "id": "native",
          "Description": "native apps offer the best performance and greatest flexibility. If your app is part of your core business and has a long live time then this most likely your best choice.",
          "icon": "todo.png"
        }
      ]
    }
  };
})();

$(function() {
  marketingQuiz.renderQuestion(marketingQuiz.userInput.answers.length);
});
