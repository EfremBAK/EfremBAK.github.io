//sleep debt calculator, are you getting enough sleep?


const getSleepHours = day =>{

    switch(day){
      case 'monday':
      return 8;
      break;
        case 'tuesday':
      return 6;
        case 'wednesday':
      return 7;
      break;
        case 'thursday':
      return 6;
        case 'friday':
      return 6;
      break;
        case 'saturday':
      return 7;
        case 'sunday':
      return 3;
      default:
      return 'enter a correct day';
      break;
    }
    };
    
    // test code
    // console.log(getSleepHours('sunday'));
    
    const getActualSleepHours = ()=>
    getSleepHours('monday')+
    getSleepHours('tuesday')+
    getSleepHours('wednesday')+
    getSleepHours('thursday')+
    getSleepHours('friday')+
    getSleepHours('saturday')+
    getSleepHours('sunday');
    
    const getIdealSleep = () =>{
      const idealHours = 7;
      return idealHours *7;
    };
    
    // console.log(getActualSleepHours());
    // console.log(getIdealSleep());
    
    const calculateSleepDebt = () => {
       const actualSlpHrs = getActualSleepHours();
       const idealSlpHrs = getIdealSleep();
    const hrs =Math.abs(actualSlpHrs-idealSlpHrs);
       if (actualSlpHrs===idealSlpHrs){
         return 'You got the perfect amount of sleep.';}
         else if (actualSlpHrs>idealSlpHrs){
           return `You got ${hrs}hrs more sleep than needed.`;
         }
         else  return `You got ${hrs}hrs less sleep than needed.`;
    }
    console.log(calculateSleepDebt());
    