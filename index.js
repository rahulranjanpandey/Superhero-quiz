var readlinesync = require('readline-sync');

var chalk = require('chalk');
var score = 0;
var userName = readlinesync.question("May I have your name , please?");

console.log("Welcome" + " " + userName + " " + "to Do you really know your superhero Batman ?");

function play (question,answer) {
  var userAnswer = readlinesync.question(question);
    if (userAnswer === answer) {
      console.log(chalk.green('\nright!'));
      score = score + 1;
    } else {
      console.log(chalk.red('\nwrong!'))
    }

    console.log("current score:", score);
    console.log("----------")
}


/*function checkHighscore(){
  flag=0;
  for (i=0;highscore.length;i++){
    if (finalscore>highscore[i].score){
      console.log(chalk.blue("Congratulations ! You have beaten the high score;). Send me the screenshot to update the highscore.;)"));
      flag = 1;
      break;
    }
  }
  if (flag ==0){
    console.log(chalk.red("Ohh Sorry! You were not able to break the high score, play again to beat the high score ! To play again, refresh the page!"));
  }
}
*/

var highScore = [
  {
    name: "Rahul",
    score: 5,
  },
  
  {  name:  "Aman",
    score: 4,
  }

]

var questions = [{
  question: "Where does Batman lives?",
  answer: "Gotham",
}, {
  question: "Who is the real Batman?",
  answer: "Bruce Wayne",
}, {
  question: "What is the place of hiding of Batman ?",
  answer: "Everywhere",
}, {
  question: "What is the car of Batman called ? ",
  answer: "Batmobile",
}, {
  question: "What is the name of Bruce wayne's butler ?",
  answer: "Alfred"
}];

for (var i = 0; i<questions.length; i++ ) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log("Congratulations ! Your score is ", score);

console.log("Check out the High Score:", highScore)
