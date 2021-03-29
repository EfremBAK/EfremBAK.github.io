//registration for the race day

let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false;
let runnerAge = 18;
(runnerAge>18)?(raceNumber+=1000):raceNumber;
if(runnerAge>18 && registeredEarly){
  console.log(`racer number ${raceNumber}, your race will start at 9:30 am.`);
}
else if (runnerAge>18 && !registeredEarly){
    console.log(`racer number ${raceNumber}, your race will start at 11:00 am.`);
}
else if(runnerAge==18){
  console.log('see the registrarion desk please')
}
else {
console.log(`racer number ${raceNumber}, your race will start at 12:30 pm.`);
}