var readlineSync = require('readline-sync')
var chalk  = require('chalk');

let questions = [
  {
    question:'What is the national fruit of India?',
    answer: 'mango'},
  {
    question:'What is the capital of India?',
    answer: "delhi"},
  {
    question:'How many  times India has won the cricket worldcup?',
    answer: 2
  },
  {
    question:'Dandia is the popular dance of which state? ',
    answer: "gujarat"
  },
  {
    question:'The Rath Yatra at Puri is celebrated in honour of which Hindu deity?',
    answer: "jaganath"
  },
  {
    question:'What is the currencty of India',
    answer: "rupee"
  },
  {
    question:'Which Indian city is the capital of 2 states?',
    answer: "chandigarh"
  },
  {
    question:'How many countries border India?',
    answer: 6
  },
  {
    question:`When is India's independence day?`,
    answer: "august 15"
  },
  {
    question:'In which state is Bengaluru located',
    answer: "karnataka"
  }
]

let options = [
  [
    'orange',
    'grape',
    'mango',
    'banana'
],
  [
    "mumbai",
    "delhi",
    "bangkok",
    "chennai",
],
[
    2,
    4,
    1,
    0
],
[
    "maharashtra",
    "west bengal",
    "tamil nadu",
    "gujarat",
],
[
    "shiv",
    "ganesh",
    "jaganath",
    "vishnu",
],
[
    "dollar",
    "yen",
    "rupee",
    "pound",
],
[
    "mumbai",
    "delhi",
    "chandigarh",
    "chennai",
],
[
    6,
    1,
    7,
    3,
],
[
    "august 15",
    "march 23",
    "february 31",
    "december 1",
],
[
    "kashmir",
    "karnataka",
    "goa",
    "uttar Pradesh",
]
];



//welcome message
console.log(chalk.green("Welcome to the quiz"));
console.log('\n');
let name = readlineSync.question("What is your name? ");
console.log('\n\n');
console.log(chalk.bgYellow("==================Instructions================="));
console.log(chalk.yellow(`1. Welcome ${name}! There are total 10 questions to be answered`));
console.log(chalk.yellow(`2. Every correct answer gives 1 point`));
console.log(chalk.yellow(`3. No point deducted for wrong answers`))
console.log(chalk.yellow(`4. Send me screenshot of your score if you beat the highscore`))
console.log(chalk.yellow(`5. Enjoy the game!`))
console.log('\n\n');
console.log(chalk.bgRed(`Let's begin!`))
console.log(`\n`);


let score = 0, i = 0 ;

//initial call to the function

askQuestion();


function askQuestion(){

  for (i; i< questions.length ; i++){

    let op = [options[i][0],options[i][1],options[i][2],options[i][3]];
    console.log(`\n`);
    console.log(`******Question No ${i+1}********`)
    let ans = readlineSync.keyInSelect(op, `${questions[i].question}`, {cancel: "Dont know"})
    
    console.log(`\n`);
    let playerAns = options[i][ans];

    if(ans ==-1){
      playerAns = false;
    }
    if(checkAnswer(playerAns, questions[i].answer)){
      console.log(chalk.green.bold(`Correct answer ${name}!`));
      score = score + 1;
    }else{
      console.log(chalk.red.bold(`The correct answer is: ${questions[i].answer}`));
    }
    
    if(i == questions.length-1){
      flag = true;
      console.log(`\n`);
      console.log(chalk.bgWhite.bold.black.bold('YOUR FINAL SCORE IS: ', score, ' points'));
      console.log(`\n`);
    }
  }
}

function checkAnswer(playerAns, correctAns){
   return (playerAns == correctAns)? true: false;
}

//play again
//code to repeat the quiz
while(flag && readlineSync.keyInYN(`Do you want to play again?`)){
    console.log('\n');
    console.log(chalk.bgYellow(`==============================================`));
    console.log(`let's play again!`);
    i=0;
    score = 0;
    askQuestion();
    
}

