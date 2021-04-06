let animal = {
  eats: "eats",
  walk: function () {
    if (!this.isSleeping) {
      alert("I walk");
    }
  },
  sleep: function () {
    this.isSleeping = true;
  },
};

// console.log(animal);

let rabbit = {
  jumps: true,
  __proto__: animal,
  name:"white Rabbit"
};

let longEar = {
  earLength: 10,
  __proto__: rabbit,
};

// rabbit.__proto__ = animal;

// alert(rabbit.eats);
// alert(rabbit.jumps);
// rabbit.walk();

// rabbit.sleep();
// alert(rabbit.isSleeping);
// alert(animal.isSleeping)

// alert(Object.keys(rabbit));

// for(let prop in rabbit) alert(prop);

// for (let prop in rabbit){
//   let isMyOwn = rabbit.hasOwnProperty(prop);
//   if (isMyOwn){
//     console.log(`own: ${prop}`);
//   }
//   else{
//     console.log(`inherited: ${prop}`);
//   }
// }


