//Eight ball predictor

let userName = 'Efrem';
userName? console.log(`Hello ${userName}!`):console.log('Hello!');
let userQuestion = 'Will I fly?';
console.log(`${userName} asked: ${userQuestion}`);
const randomNumber =Math.floor(Math.random()*8);
let eightBall ='';
switch(randomNumber){
 case 1:
 eightBall='It is certain';
 break;
 case 2:
 eightBall ='It is decidely so';
 break;
 case 3:
 eightBall = 'Reply hazy try again';
 break;
 case 4:
 eightBall = 'Cannot predict now';
 break;
 case 5:
 eightBall ='yes';
 break;
 case 6:
 eightBall = 'nope';
 break;
 case 7:
 eightBall = 'Signs point to yup';
 break;
 default:
 eightBall = 'Outlook not so good';
 break;
}
console.log(`The eight ball answered: ${eightBall}`);
